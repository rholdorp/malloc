import { getCurrentlySignedUser } from '../../../services/firebase'

const getAllocation = async () => {
  try {
    const uid = getCurrentlySignedUser()
    console.log('Getting Allocation')
    if (uid) {
      const db = firebase.firestore()
      await db.collection('allocations').get().then((snapshot) => {
        console.log(snapshot.docs)
      })
    } else {
      throw new Error('Having trouble accesing Firebase. Please try again...')
    }
  } catch (e) {
    console.error(e)
  }
}

export { getAllocation }
