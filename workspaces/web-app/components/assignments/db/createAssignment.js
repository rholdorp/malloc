import { getCurrentlySignedUser } from '../../../services/firebase'

const createAssignment = async (assignmentName, assignmentNumber) => {
  try {
    const uid = getCurrentlySignedUser()
    if (uid) {
      const db = firebase.firestore()
      await db.collection('assignments').add({
        assignmentName,
        assignmentNumber
      })
    } else {
      throw new Error('Having trouble accesing Firebase. Please try again...')
    }
  } catch (e) {
    console.error(e)
  }
}

export { createAssignment }
