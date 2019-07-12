import { getCurrentlySignedUser } from '../../../services/firebase'

const createAllocation = async (name, activity, commitment, from, till, hours, timestamp) => {
  try {
    const uid = getCurrentlySignedUser()
    if (uid) {
      const db = firebase.firestore()
      await db.collection('allocations').add({
        name, activity, commitment, from, till, hours, timestamp
      })
    } else {
      throw new Error('Having trouble accesing Firebase. Please try again...')
    }
  } catch (e) {
    console.error(e)
  }
}

export { createAllocation }
