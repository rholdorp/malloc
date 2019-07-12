import React, { useState } from 'react'
import { Button, Header, Form } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'

const AllocationDialogContent = props => {
  const [ name, setName ] = useState('')
  const [ activity, setActivity ] = useState('')
  const [ commitment, setCommitment ] = useState('')
  const [ from, setFrom ] = useState('')
  const [ till, setTill ] = useState('')
  const [ hours, setHours ] = useState(0)
  const [ timestamp, setTimestamp ] = useState('')

  const onDone = () => {
    const { onDone } = props
    console.log(name, activity, commitment, from, till, hours, timestamp)

    onDone && onDone(name, activity, commitment, from, till, hours, timestamp)
  }

  const { buttonStyling } = props
  return (
    <Centered>
      <Header>Add information about your allocation below</Header>
      <Form css={{ width: '80%', marginBottom: '20px' }}>
        <Form.Field>
          <label htmlFor='name'>Name</label>
          <input id='name'
            placeholder='Team member name...'
            name='name'
            onChange={e => setName(e.target.value)}
            value={name} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='activity'>Activity</label>
          <input id='activity'
            placeholder='Activity name...'
            name='activity'
            onChange={e => setActivity(e.target.value)}
            value={activity} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='commitment'>Commitment</label>
          <input id='commitment'
            placeholder='Commitment...'
            name='commitment'
            onChange={e => setCommitment(e.target.value)}
            value={commitment} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='from'>From</label>
          <input id='from'
            placeholder='From...'
            name='from'
            onChange={e => setFrom(e.target.value)}
            value={from} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='till'>Till</label>
          <input id='till'
            placeholder='Till...'
            name='till'
            onChange={e => setTill(e.target.value)}
            value={till} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='hours'>hours</label>
          <input id='hours'
            placeholder='#123456'
            name='hours'
            onChange={e => setHours(e.target.value)}
            value={hours} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='timestamp'>Timestamp</label>
          <input id='timestamp'
            placeholder='Timestamp...'
            name='timestamp'
            onChange={e => setTimestamp(e.target.value)}
            value={timestamp} />
        </Form.Field>
      </Form>
      <Button {...buttonStyling} onClick={onDone}>Done</Button>
    </Centered>
  )
}

export { AllocationDialogContent }
