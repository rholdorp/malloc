import React, { useState } from 'react'
import { Button, Header, Form } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'

const AssignmentDialogContent = props => {
  const [ assignmentName, setAssignmentName ] = useState('')
  const [ assignmentNumber, setAssignmentNumber ] = useState(0)

  const onDone = () => {
    const { onDone } = props
    onDone && onDone(assignmentName, assignmentNumber)
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
          <label htmlFor='project-number'>Project number</label>
          <input id='project-number'
            placeholder='#123456'
            name='projectNumber'
            onChange={e => setAssignmentNumber(e.target.value)}
            value={assignmentNumber} />
        </Form.Field>
      </Form>
      <Button {...buttonStyling} onClick={onDone}>Done</Button>
    </Centered>
  )
}

export { AssignmentDialogContent }
