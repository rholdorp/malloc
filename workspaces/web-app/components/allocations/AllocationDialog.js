import React from 'react'

import { Dialog } from '../dialogs'
import { AllocationDialogContent } from './AllocationDialogContent'

const AllocationDialog = ({
  buttonStyling,
  buttonDisabled,
  buttonText,
  modalTitle,
  open,
  assignmentList,
  teamMemberList,
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
    <AllocationDialogContent
      assignmentList={assignmentList}
      teamMemberList={teamMemberList}
      onDone={onDone}
      buttonStyling={buttonStyling} />
  </Dialog>
)
export { AllocationDialog }
