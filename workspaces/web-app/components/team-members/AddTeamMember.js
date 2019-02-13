import React, { useState, useEffect } from 'react'
import { TeamMemberDialog } from './TeamMemberDialog'

import { createTeamMember } from './db'

const AddTeamMember = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <TeamMemberDialog open={open}
      buttonText='Add team member...'
      buttonStyling={{ secondary: true, color: 'black' }}
      onOpen={() => setOpen(true)}
      onDone={async teamMember => {
        setOpen(false)
        await createTeamMember(teamMember)
      }}
      onCancel={() => setOpen(false)} />
  )
}

export { AddTeamMember }
