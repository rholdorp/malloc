import { getCurrentlySignedUser } from '../../../services/firebase'

const createTeamMember = async (name, contract, fromDate, tillDate, availability) => {
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
