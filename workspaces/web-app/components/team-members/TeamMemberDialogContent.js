import React, { useState } from 'react'
import { Button, Header, Form } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'

const TeamMemberDialogContent = props => {
  
  const [name, setName] = useState('')
  const [availability, setAvailability] = useState('')
  
  const onDone = () => {
    const { onDone } = props

    onDone && onDone(name, availability)
  }

  const { buttonStyling } = props

  return (
    <Centered>
      <Header>Add information about the team member below</Header>
      <Form css={{ width: '80%', marginBottom: '20px' }}>
        <Form.Field>
          <label htmlFor='member-name'>Name</label>
          <input id='member-name'
            placeholder='Team Member Name...'
            name='name'
            onChange={e => setName(e.target.value)}
            value={name} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='availability'>Availability</label>
          <input id='availability'
            placeholder='#123456'
            name='availability'
            onChange={e => setAvailability(e.target.value)}
            value={availability} />
        </Form.Field>
      </Form>
      <Button {...buttonStyling} onClick={onDone}>Done</Button>
    </Centered>
  )
}


export { TeamMemberDialogContent }
