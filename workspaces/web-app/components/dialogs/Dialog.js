import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Dialog = ({
  children,
  buttonStyling,
  buttonDisabled,
  buttonText,
  modalTitle,
  open,
  onOpen = () => {},
  onDone = () => {},
  onCancel = () => {}
}) => (
  <Modal open={open}
    trigger={
      <Button {...buttonStyling}
        disabled={buttonDisabled}
        onClick={onOpen}>
        {buttonText || 'New...'}
      </Button>
    }
    onClose={onCancel}
    closeIcon >
    <Modal.Header>{modalTitle || 'New ...'}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        { children }
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

Dialog.propsTypes = {
  children: PropTypes.node,
  buttonStyling: PropTypes.object,
  buttonDisabled: PropTypes.bool,
  buttonText: PropTypes.string,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onDone: PropTypes.func,
  onCancel: PropTypes.func
}

export { Dialog }
