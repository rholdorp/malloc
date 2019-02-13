import React, { Component } from 'react'
import { FadingValueBox } from '../animations'
import { AssignmentDialog } from '../assignments'
import { TeamMemberDialog } from '../team-members'
import { Centered, Row } from '@react-frontend-developer/react-layout-helpers'
import { Input } from 'semantic-ui-react'

import { HomeGrid, HeaderGridItem, ActionsGridItem, SearchGridItem, 
  ResultsGridItem, FooterGridItem } from './HomeGrid'

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
    assignmentDialogOpen: false,
    teamMemberDialogOpen: false
  }

  addAssignment = async assignment => {
    this.setState({ assignmentDialogOpen: false })
    await createAssignment(assignment)
  }

  addTeamMember = async teamMember => {
    this.setState({ teamMemberDialogOpen: false })
    await createTeamMember(teamMember)
  }

  openAssignmentDialog = () => {
    this.setState({ assignmentDialogOpen: true })
  }

  onCancelAddingAssignment = () => {
    this.setState({ assignmentDialogOpen: false })
  }

  openTeamMemberDialog = () => {
    this.setState({ teamMemberDialogOpen: true })
  }

  onCancelAddingTeamMember = () => {
    this.setState({ teamMemberDialogOpen: false })
  }

  render () {
    return (
      <FadingValueBox>
        <HomeGrid>
          <HeaderGridItem>
            <h1 css={{ color: '#ff00cc' }}>/&lt;malloc&gt;</h1>
          </HeaderGridItem>
          <ActionsGridItem>
            <AssignmentDialog open={this.state.assignmentDialogOpen}
              buttonText='Add assignment...'
              buttonStyling={{ secondary: true, color: 'black' }}
              onOpen={this.openAssignmentDialog}
              onDone={this.addAssignment}
              onCancel={this.onCancelAddingAssignment} />
            <TeamMemberDialog open={this.state.teamMemberDialogOpen}
              buttonText='Add team member...'
              buttonStyling={{ secondary: true, color: 'black' }}
              onOpen={this.openTeamMemberDialog}
              onDone={this.addTeamMember}
              onCancel={this.onCancelAddingTeamMember} />
          </ActionsGridItem>
          <SearchGridItem>
            <Input 
              action={{ color: 'black', icon: 'search' }}
              actionPosition='left'
              placeholder='Search...'
              css={{ width:'80%' }}
            />
          </SearchGridItem>
          <ResultsGridItem>
            Here come search results...
          </ResultsGridItem>
          <FooterGridItem css={{ color: '#ff00cc'}}>
            © 2018 by Malloc
          </FooterGridItem>
        </HomeGrid>
      </FadingValueBox>
    )
  }
}

export { Home }
