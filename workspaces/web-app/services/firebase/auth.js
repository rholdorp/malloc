const getCurrentlySignedUser = () => {
  const user = firebase.auth().currentUser
  if (user) {
    return user.uid
  } else {
    return null
  }
}

export { getCurrentlySignedUser }
