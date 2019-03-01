import React, { useState } from 'react'
import { AllocationDialog } from './AllocationDialog'

import { createAllocation } from './db'

const AddAllocation = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <AllocationDialog open={open}
      buttonText='Add allocation...'
      modalTitle='Add allocation'
      buttonStyling={{ secondary: true, color: 'black' }}
      onOpen={() => setOpen(true)}
      onDone={async (allocationName, allocationNumber) => {
        setOpen(false)
        await createAllocation(allocationName, allocationNumber)
      }}
      onCancel={() => setOpen(false)} />
  )
}

export { AddAllocation }
