import React, { Component } from 'react'
import { FadingValueBox } from '../animations'
import { AssignmentDialog } from '../assignments'

class Home extends Component {
  state = {
    open: false
  }

  addAssignment = () => {
    console.log('adding assignment')
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
