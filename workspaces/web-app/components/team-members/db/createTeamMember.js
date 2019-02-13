import { getCurrentlySignedUser } from '../../services/firebase'

const createTeamMember = async teamMember => {
  try {
    const uid = getCurrentlySignedUser()
    if (uid) {
      const { name, availability } = teamMember
      const db = firebase.firestore()
      await db.collection('teamMembers').add({
        name,
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
