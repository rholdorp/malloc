import React, { useState } from 'react'
import { AllocationDialog } from './AllocationDialog'

import { createAllocation } from './db'

const AddAllocation = (props) => {
  const [ open, setOpen ] = useState(false)

  const assignmentList = props.assignments
  const teamMemberList = props.teamMembers

  return (
    <AllocationDialog open={open}
      assignmentList={assignmentList}
      teamMemberList={teamMemberList}
      buttonText='Add allocation...'
      modalTitle='Add allocation'
      buttonStyling={{ color: 'facebook' }}
      onOpen={() => setOpen(true)}
      onDone={async (name, assignmentName, commitment, from, till, hours) => {
        setOpen(false)
        await createAllocation(name, assignmentName, commitment, from, till, hours)
      }}
      onCancel={() => setOpen(false)} />
  )
}

export { AddAllocation }
