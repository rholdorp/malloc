import React from 'react'
import { Button, Header, Form } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'

class AssignmentDialogContent extends React.Component {
  state = {
    assignmentName: '',
    projectNumber: ''
  }

  onChange = target => {
    this.setState({ [`${target.name}`]: target.value })
  }

  onDone = () => {
    const { onDone } = this.props

    onDone && onDone(this.state)
  }

  render () {
    const { buttonStyling } = this.props
    return (
      <Centered>
        <Header>Add information about your assignment below</Header>
        <Form css={{ width: '80%', marginBottom: '20px' }}>
          <Form.Field>
            <label htmlFor='assignment-name'>Assignment Name</label>
            <input id='assignment-name'
              placeholder='Assignment name...'
              name='assignmentName'
              onChange={e => this.onChange(e.target)}
              value={this.state.assignmentName} />
          </Form.Field>
          <Form.Field>
            <label htmlFor='project-number'>Project number</label>
            <input id='project-number'
              placeholder='#123456'
              name='projectNumber'
              onChange={e => this.onChange(e.target)}
              value={this.state.projectNumber} />
          </Form.Field>
        </Form>
        <Button {...buttonStyling} onClick={this.onDone}>Done</Button>
      </Centered>
    )
  }
}

export { AssignmentDialogContent }
