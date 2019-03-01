import React, { useState } from 'react'
import { AssignmentDialog } from './AssignmentDialog'

import { createAssignment } from './db'

const AddAssignment = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <AssignmentDialog open={open}
      buttonText='Add assignment...'
      modalTitle='Add assignment'
      buttonStyling={{ secondary: true, color: 'black' }}
      onOpen={() => setOpen(true)}
      onDone={async (assignmentName, assignmentId, assignmentPhase, assignmentDomain) => {
        setOpen(false)
        await createAssignment(assignmentName, assignmentId, assignmentPhase, assignmentDomain)
      }}
      onCancel={() => setOpen(false)} />
  )
}

export { AddAssignment }
