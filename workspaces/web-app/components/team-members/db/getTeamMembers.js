import { getCurrentlySignedUser } from '../../../services/firebase'

const getTeamMembers = async () => {
  try {
    const uid = getCurrentlySignedUser()
    console.log('Getting Team Members')
    if (uid) {
      const db = firebase.firestore()
      const snapshot = await db.collection('teamMembers').get()
      const teamMembers = snapshot.docs && snapshot.docs.map((teamMember) => (
        teamMember.data()
      ))
      return teamMembers
    } else {
      throw new Error('Having trouble accesing Firebase. Please try again...')
    }
  } catch (e) {
    console.error(e)
  }
}

export { getTeamMembers }
