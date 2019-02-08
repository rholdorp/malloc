import React from 'react'
import { Button, Header, Form } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'

class TeamMemberDialogContent extends React.Component {
  state = {
    name: '',
    availability: ''
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
        <Header>Add information about the team member below</Header>
        <Form css={{ width: '80%', marginBottom: '20px' }}>
          <Form.Field>
            <label htmlFor='member-name'>Name</label>
            <input id='member-name'
              placeholder='Team Member Name...'
              name='name'
              onChange={e => this.onChange(e.target)}
              value={this.state.name} />
          </Form.Field>
          <Form.Field>
            <label htmlFor='availability'>Availability</label>
            <input id='availability'
              placeholder='#123456'
              name='availability'
              onChange={e => this.onChange(e.target)}
              value={this.state.availability} />
          </Form.Field>
        </Form>
        <Button {...buttonStyling} onClick={this.onDone}>Done</Button>
      </Centered>
    )
  }
}

export { TeamMemberDialogContent }
