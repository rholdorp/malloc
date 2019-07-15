import React, { useState } from 'react'
import { Button, Header, Form, Dropdown } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'
import { DateInput } from 'semantic-ui-calendar-react';

const AllocationDialogContent = props => {

  const [ name, setName ] = useState('')
  const [ assignmentName, setAssignmentName ] = useState('')
  const [ commitment, setCommitment ] = useState('')
  const [ from, setFrom ] = useState('')
  const [ till, setTill ] = useState('')
  const [ hours, setHours ] = useState(0)

  const availabilityTypes = [
    { key: 'Expected', value: 'Expected', text: 'Expected' },
    { key: 'Committed', value: 'Committed', text: 'Committed' }
  ]

  const allocationTime = [
    { key: '40', value: '40', text: '40' },
    { key: '36', value: '36', text: '36' },
    { key: '32', value: '32', text: '32' },
    { key: '24', value: '24', text: '24' },
    { key: '20', value: '20', text: '20' },
    { key: '0', value: '0', text: '0' }
  ]

  const onDone = () => {
    const { onDone } = props
    console.log(name, assignmentName, commitment, from, till, hours)

    onDone && onDone(name, assignmentName, commitment, from, till, hours)
  }

  const assignmentList = props.assignmentList
  const teamMemberList = props.teamMemberList

  const assignmentOptions = assignmentList.map((assignment, index) => {
    const container = {}

    container.key = index
    container.text = assignment.assignmentName
    container.value = assignment.assignmentName

    return container
  })

  const teamMemberOptions = teamMemberList.map((teamMember, index) => {
    const container = {}

    container.key = index
    container.text = teamMember.name
    container.value = teamMember.name

    return container
  })

  const { buttonStyling } = props

  const handleDateChange = (event, {name, value}) => {
    if (name === 'from') {
      setFrom(value)
    }
    if (name === 'till') {
      setTill(value)
    }  
  }

  return (
    <Centered>
      <Header>Add information about your allocation below</Header>
      <Form css={{ width: '80%', marginBottom: '20px' }}>
        <Form.Field>
          <label htmlFor='name'>Name</label>
          <Dropdown 
            placeholder='Select team member'
            selection
            name='name'
            options={teamMemberOptions}
            onChange={e => setName(e.target.textContent)}
            value={name} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='assignmentName'>Assignment</label>
          <Dropdown 
            selection
            placeholder='Assignment name...'
            options={assignmentOptions}
            onChange={e => setAssignmentName(e.target.textContent)}
            value={assignmentName}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor='commitment'>Commitment</label>
          <Dropdown 
            placeholder='Level of commitment'
            selection
            name='commitment'
            options={availabilityTypes}
            onChange={e => setCommitment(e.target.textContent)}
            value={commitment} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='from'>From</label>
          <DateInput id='from'
            placeholder='From date'
            name='from'
            onChange={handleDateChange}
            value={from} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='till'>Till</label>
          <DateInput id='till'
            placeholder='Till date'
            name='till'
            onChange={handleDateChange}
            value={till} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='hours'>hours</label>
          <Dropdown 
            selection
            placeholder='Hours per week allocated'
            name='hours'
            options={allocationTime}
            onChange={e => setHours(e.target.textContent)}
            value={hours} />
        </Form.Field>
      </Form>
      <Button {...buttonStyling} onClick={onDone}>Done</Button>
    </Centered>
  )
}

export { AllocationDialogContent }
