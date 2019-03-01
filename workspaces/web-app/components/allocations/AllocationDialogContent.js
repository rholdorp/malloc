import React, { useState } from 'react'
import { Button, Header, Form } from 'semantic-ui-react'
import { Centered } from '@react-frontend-developer/react-layout-helpers'

const AllocationDialogContent = props => {
  const [ allocationName, setAllocationName ] = useState('')
  const [ allocationNumber, setAllocationNumber ] = useState(0)

  const onDone = () => {
    const { onDone } = props
    onDone && onDone(allocationName, allocationNumber)
  }

  const { buttonStyling } = props
  return (
    <Centered>
      <Header>Add information about your allocation below</Header>
      <Form css={{ width: '80%', marginBottom: '20px' }}>
        <Form.Field>
          <label htmlFor='allocation-name'>Allocation Name</label>
          <input id='allocation-name'
            placeholder='Allocation name...'
            name='allocationName'
            onChange={e => setAllocationName(e.target.value)}
            value={allocationName} />
        </Form.Field>
        <Form.Field>
          <label htmlFor='project-number'>Project number</label>
          <input id='project-number'
            placeholder='#123456'
            name='projectNumber'
            onChange={e => setAllocationNumber(e.target.value)}
            value={allocationNumber} />
        </Form.Field>
      </Form>
      <Button {...buttonStyling} onClick={onDone}>Done</Button>
    </Centered>
  )
}

export { AllocationDialogContent }
