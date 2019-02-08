import React, { Component } from 'react'
import { FadingValueBox } from '../animations'
import { AssignmentDialog } from '../assignments'

const getCurrentlySignedUser = () => {
  const user = firebase.auth().currentUser
  if (user) {
    return user.uid
  } else {
    return null
  }
}

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

// const read = async tag => {
//   const uid = getCurrentlySignedUser()
//   if (uid) {
//     const db = firebase.firestore()
//     const doc = await db.collection('users').doc(uid).get()
//     const senderTag = doc.get(tag)

//   } else {
//     throw new Error('Having trouble accesing Firebase. Please try again...')
//   }
// }
class Home extends Component {
  state = {
    open: false
  }

  addAssignment = async assignment => {
    this.setState({ open: false })
    await createAssignment(assignment)
  }

  openAssignmentDialog = () => {
    this.setState({ open: true })
  }

  onCancelAddingAssignment = () => {
    this.setState({ open: false })
  }

  render () {
    return (
      <FadingValueBox>
        <AssignmentDialog open={this.state.open}
          buttonText='Add assignment...'
          buttonStyling={{ basic: true, color: 'black' }}
          onOpen={this.openAssignmentDialog}
          onDone={this.addAssignment}
          onCancel={this.onCancelAddingAssignment} />
      </FadingValueBox>
    )
  }
}

export { Home }
