import React, { useState } from 'react'
import { Button, Header, Form, Dropdown } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'
import { DateInput } from 'semantic-ui-calendar-react';

const TeamMemberDialogContent = props => {

  const contractTypes = [
    { key: 'payroll', value: 'payroll', text: 'payroll' },
    { key: 'contractor', value: 'contractor', text: 'contractor' }
  ]

  const availabilityTypes = [
    { key: 40, value: 40, text: 40 },
    { key: 36, value: 36, text: 36 },
    { key: 32, value: 32, text: 32 },
    { key: 24, value: 24, text: 24 },
    { key: 20, value: 20, text: 20 },
    { key: 0, value: 0, text: 0 }
  ]

  const [name, setName] = useState('')
  const [contract, setContract] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [tillDate, setTillDate] = useState('')
  const [availability, setAvailability] = useState('')

  const onDone = () => {
    const { onDone } = props

    onDone && onDone(name, contract, fromDate, tillDate, availability)
  }

  const { buttonStyling } = props

  const handleDateChange = (event, {name, value}) => {
    if (name === 'fromDate') {
      setFromDate(value)
    }
    if (name === 'tillDate') {
      setTillDate(value)
    }  
  }

  return (
    <Centered>
      <Header>Add information about the team member below</Header>
      <Form css={{ width: '80%', marginBottom: '20px' }}>
        <Form.Field>
          <label htmlFor='member-name'>Name</label>
          <input
            placeholder='Enter team member name...'
            name='name'
            onChange={e => setName(e.target.value)}
            value={name} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='contract'>Contract Type</label>
          <Dropdown 
            placeholder='worker contract'
            selection
            name='contract'
            options={contractTypes}
            onChange={e => setContract(e.target.textContent)}
            value={contract} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='fromDate'>From Date</label>
          <DateInput 
            name='fromDate'
            placeholder='Date'
            value={fromDate}
            onChange={handleDateChange} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='tillDate'>Till date</label>
          <DateInput id='till-date'
            placeholder='Date'
            name='tillDate'
            value={tillDate}
            onChange={handleDateChange} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='availability'>Availability</label>
          <Dropdown 
            selection
            placeholder='Available hours per week '
            name='availability'
            options={availabilityTypes}
            onChange={e => setAvailability(e.target.textContent)}
            value={availability} />
        </Form.Field>
      </Form>
      <Button {...buttonStyling} onClick={onDone}>Done</Button>
    </Centered>
  )
}
export { TeamMemberDialogContent }
