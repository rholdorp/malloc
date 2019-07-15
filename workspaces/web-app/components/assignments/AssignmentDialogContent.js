import React, { useState } from 'react'
import { Button, Header, Form, Dropdown } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'

const AssignmentDialogContent = props => {

  const [ assignmentName, setAssignmentName ] = useState('')
  const [ assignmentId, setAssignmentId ] = useState('')
  const [ assignmentPhase, setAssignmentPhase ] = useState('')
  const [ assignmentDomain, setAssignmentDomain ] = useState('')

  const assignmentPhaseOptions = [
    { key: 'Exploration', value:  'Exploration', text:  'Exploration' },
    { key: 'Advanced development', value: 'Advanced development', text: 'Advanced development' },
    { key: 'Development', value: 'Development', text: 'Development' }
  ]

  const assignmentDomainTypes = [
    { key: 'Invest', value: 'Invest', text: 'Invest' },
    { key: 'Internal', value: 'Internal', text: 'Internal' },
    { key: 'External', value: 'External', text: 'External' }
  ]

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
          <Dropdown 
            placeholder='E/AD/D'
            selection
            name='assignmentPhase'
            options={assignmentPhaseOptions}
            onChange={e => setAssignmentPhase(e.target.textContent)}
            value={assignmentPhase} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='assignment-domain'>Assignment Domain</label>
          <Dropdown 
            placeholder='Innovation domain'
            selection
            name='assignmentDomain'
            options={assignmentDomainTypes}
            onChange={e => setAssignmentDomain(e.target.textContent)}
            value={assignmentDomain} />
        </Form.Field>
      </Form>
      <Button {...buttonStyling} onClick={onDone}>Done</Button>
    </Centered>
  )
}

export { AssignmentDialogContent }
