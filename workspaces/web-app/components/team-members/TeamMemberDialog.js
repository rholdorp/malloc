import React from 'react'

import { Dialog } from '../dialogs'
import { TeamMemberDialogContent } from './TeamMemberDialogContent'

const TeamMemberDialog = ({
  buttonStyling,
  buttonDisabled,
  buttonText,
  modalTitle,
  open,
  onOpen = () => {},
  onDone = () => {},
  onCancel = () => {}
}) => (
  <Dialog buttonStyling={buttonStyling}
    buttonText={buttonText}
    modalTitle={modalTitle}
    open={open}
    onOpen={onOpen}
    onDone={onDone}
    onCancel={onCancel}>
    <TeamMemberDialogContent onDone={onDone} buttonStyling={buttonStyling} />
  </Dialog>
)
export { TeamMemberDialog }
