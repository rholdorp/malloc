import { getCurrentlySignedUser } from '../../../services/firebase'

const createAllocation = async (allocationName, allocationNumber) => {
  try {
    const uid = getCurrentlySignedUser()
    if (uid) {
      const db = firebase.firestore()
      await db.collection('allocations').add({
        allocationName,
        allocationNumber
      })
    } else {
      throw new Error('Having trouble accesing Firebase. Please try again...')
    }
  } catch (e) {
    console.error(e)
  }
}

export { createAllocation }
