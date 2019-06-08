import React, { useState } from 'react'
import { AllocationDialog } from './AllocationDialog'

import { createAllocation } from './db'

const AddAllocation = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <AllocationDialog open={open}
      buttonText='Add allocation...'
      modalTitle='Add allocation'
      buttonStyling={{ color: 'facebook' }}
      onOpen={() => setOpen(true)}
      onDone={async (name, activity, commitment, from, till, hours, timestamp) => {
        setOpen(false)
        await createAllocation(name, activity, commitment, from, till, hours, timestamp)
      }}
      onCancel={() => setOpen(false)} />
  )
}

export { AddAllocation }
