let config = {
  apiKey: 'AIzaSyBLWtVz_9n5YFLJEYpH694u7RABhKwOloI',
  authDomain: 'malloc-67fe1.firebaseapp.com',
  databaseURL: 'https://malloc-67fe1.firebaseio.com',
  projectId: 'malloc-67fe1',
  storageBucket: 'malloc-67fe1.appspot.com',
  messagingSenderId: '260781768420'
}

const authenticate = async (email, password) => {
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
  const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
  console.log(`Nice to see you again ${userCredential.user.uid}!`)
}

async function startFirebase (password) {
  const email = 'firebase@malloc.com'

  try {
    firebase.initializeApp(config)
    await authenticate(email, password)
  } catch (e) {
    if (!/already exists/.test(e.message)) {
      console.error('Firebase initialization error:', e.stack)
    }
  }
}

export { startFirebase }

// use this code to manually add new users
// var newUserRef = usersRef.push()
// newUserRef.set({
//   address: 'address...',
//   email: 'email...'
// })
