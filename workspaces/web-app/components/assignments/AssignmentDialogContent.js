import React, { useState } from 'react'
import { Button, Header, Form } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'

const AssignmentDialogContent = props => {
  const [ assignmentName, setAssignmentName ] = useState('')
  const [ assignmentId, setAssignmentId ] = useState('')
  const [ assignmentPhase, setAssignmentPhase ] = useState('')
  const [ assignmentDomain, setAssignmentDomain ] = useState('')

  const onDone = () => {
    const { onDone } = props
    onDone && onDone(assignmentName, assignmentId, assignmentPhase, assignmentDomain)
  }

  const { buttonStyling } = props
  return (
    <Centered>
      <Header>Add information about your assignment below</Header>
      <Form css={{ width: '80%', marginBottom: '20px' }}>
        <Form.Field>
          <label htmlFor='assignment-name'>Assignment Name</label>
          <input id='assignment-name'
            placeholder='Assignment name...'
            name='assignmentName'
            onChange={e => setAssignmentName(e.target.value)}
            value={assignmentName} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='assignment-id'>Assignment Id</label>
          <input id='assignment-id'
            placeholder='#123456'
            name='assignmentId'
            onChange={e => setAssignmentId(e.target.value)}
            value={assignmentId} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='assignment-phase'>Assignment Phase</label>
          <input id='assignment-phase'
            placeholder='E/AD/D'
            name='assignmentPhase'
            onChange={e => setAssignmentPhase(e.target.value)}
            value={assignmentPhase} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='assignment-domain'>Assignment Domain</label>
          <input id='assignment-domain'
            placeholder='Innovation Domain...'
            name='assignmentDomain'
            onChange={e => setAssignmentDomain(e.target.value)}
            value={assignmentDomain} />
        </Form.Field>
      </Form>
      <Button {...buttonStyling} onClick={onDone}>Done</Button>
    </Centered>
  )
}

export { AssignmentDialogContent }
