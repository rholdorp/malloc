import { getCurrentlySignedUser } from '../../../services/firebase'
import moment from 'moment'

const datesToWeeks = (from, till, availability) => {

  const weeks = Array(53).fill(0);
  const fromWk = moment(from, "DD-MM-YYYY").week();
  const tillWk = moment(till, "DD-MM-YYYY").week();
  
  weeks.map((week, index) => {
    if((fromWk<tillWk) && (index >= fromWk && index <= tillWk)){
      weeks[index] = availability
    } 
  })

  return weeks
}

const createTeamMember = async (name, contract, fromDate, tillDate, availability) => {
  try {
    const uid = getCurrentlySignedUser()

    const wksAvailable = datesToWeeks(fromDate, tillDate, availability)

    if (uid) {
      const db = firebase.firestore()
      await db.collection('teamMembers').doc(name).set({
        name,
        contract,
        fromDate,
        tillDate,
        wksAvailable
      })
    } else {
      throw new Error('Having trouble accesing Firebase. Please try again...')
    }
  } catch (e) {
    console.error(e)
  }
}

const updateTeamMember = async (name, contract, fromDate, tillDate, availability) => {
  try {
    const uid = getCurrentlySignedUser()
    if (uid) {
      const db = firebase.firestore()
      await db.collection('teamMembers').add({
        name,
        contract,
        fromDate,
        tillDate,
        availability
      })
    } else {
      throw new Error('Having trouble accesing Firebase. Please try again...')
    }
  } catch (e) {
    console.error(e)
  }
}

export { createTeamMember }
