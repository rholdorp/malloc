import { getCurrentlySignedUser } from '../../services/firebase'

const createAssignment = async assignment => {
  try {
    const uid = getCurrentlySignedUser()
    if (uid) {
      const { assignmentName, projectNumber } = assignment
      const db = firebase.firestore()
      await db.collection('assignments').add({
        assignmentName,
        projectNumber
      })
    } else {
      throw new Error('Having trouble accesing Firebase. Please try again...')
    }
  } catch (e) {
    console.error(e)
  }
}

export { createAssignment }
