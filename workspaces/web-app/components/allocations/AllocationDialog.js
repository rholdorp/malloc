import React from 'react'

import { Dialog } from '../dialogs'
import { AllocationDialogContent } from './AllocationDialogContent'

const AllocationDialog = ({
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
    <AllocationDialogContent onDone={onDone} buttonStyling={buttonStyling} />
  </Dialog>
)
export { AllocationDialog }
