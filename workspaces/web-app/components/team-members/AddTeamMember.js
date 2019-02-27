import React, { useState } from 'react'
import { TeamMemberDialog } from './TeamMemberDialog'

import { createTeamMember } from './db'

const AddTeamMember = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <TeamMemberDialog open={open}
      buttonText='Add team member...'
      modalTitle='Add team member'
      buttonStyling={{ secondary: true, color: 'black' }}
      onOpen={() => setOpen(true)}
      onDone={async (name, availability) => {
        setOpen(false)
        await createTeamMember(name, availability)
      }}
      onCancel={() => setOpen(false)} />
  )
}

export { AddTeamMember }
