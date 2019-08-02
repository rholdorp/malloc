import { getCurrentlySignedUser } from '../../../services/firebase'
import moment from 'moment'

const datesToWeeks = (from, till, hours) => {
  const weeks = Array(53).fill(0)
  const fromWk = moment(from, 'DD-MM-YYYY').week()
  const tillWk = moment(till, 'DD-MM-YYYY').week()

  weeks.map((week, index) => {
    if ((fromWk < tillWk) && (index >= fromWk && index <= tillWk)) {
      weeks[index] = hours
    }
  })

  return weeks
}

const createAllocation = async (name, assignmentName, commitment, from, till, hours) => {
  try {
    const uid = getCurrentlySignedUser()

    const allocationWeeks = datesToWeeks(from, till, hours)
    //    const allocations = { ...allocationWeeks, assignmentName: assignmentName, commitment: commitment }

    const allocations = {}

    allocations[`allocations.${commitment}.${assignmentName}`] = allocationWeeks

    if (uid) {
      const db = firebase.firestore()
      await db.collection('teamMembers').doc(name).update(
        allocations
      )
    } else {
      throw new Error('Having trouble accesing Firebase. Please try again...')
    }
  } catch (e) {
    console.error(e)
  }
}

export { createAllocation }
