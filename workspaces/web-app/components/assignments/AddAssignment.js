import React, { useState } from 'react'
import { AssignmentDialog } from './AssignmentDialog'

import { createAssignment } from './db'

const AddAssignment = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <AssignmentDialog open={open}
      buttonText='Add assignment...'
      buttonStyling={{ secondary: true, color: 'black' }}
      onOpen={() => setOpen(true)}
      onDone={async assignment => {
        setOpen(false)
        await createAssignment(assignment)
      }}
      onCancel={() => setOpen(false)} />
  )
}

export { AddAssignment }
