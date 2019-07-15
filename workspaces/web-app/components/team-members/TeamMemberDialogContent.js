import React, { useState } from 'react'
import { Button, Header, Form } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'
import { DateInput } from 'semantic-ui-calendar-react';

const TeamMemberDialogContent = props => {
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
      console.log('from date = ', value)
      setFromDate(value)
    }
    if (name === 'tillDate') {
      console.log('till date = ', value)
      setTillDate(value)
    }  
  }

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
          <label htmlFor='contract'>Contract Type</label>
          <input id='contract'
            placeholder='#123456'
            name='contract'
            onChange={e => setContract(e.target.value)}
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
