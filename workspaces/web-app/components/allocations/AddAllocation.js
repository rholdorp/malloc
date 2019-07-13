import React, { useState } from 'react'
import { AllocationDialog } from './AllocationDialog'

import { createAllocation } from './db'

const AddAllocation = (props) => {
  const [ open, setOpen ] = useState(false)
  const assignmentList = props.assignments

  return (
    <AllocationDialog open={open}
      assignmentList={assignmentList}
      buttonText='Add allocation...'
      modalTitle='Add allocation'
      buttonStyling={{ color: 'facebook' }}
      onOpen={() => setOpen(true)}
      onDone={async (name, assignmentName, commitment, from, till, hours, timestamp) => {
        setOpen(false)
        await createAllocation(name, assignmentName, commitment, from, till, hours, timestamp)
      }}
      onCancel={() => setOpen(false)} />
  )
}

export { AddAllocation }
