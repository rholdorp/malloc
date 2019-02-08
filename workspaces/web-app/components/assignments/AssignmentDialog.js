import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { AssignmentDialogContent } from './AssignmentDialogContent'
import PropTypes from 'prop-types'

class AssignmentDialog extends React.Component {
  static propsTypes = {
    buttonStyling: PropTypes.object,
    buttonDisabled: PropTypes.bool,
    buttonText: PropTypes.string,
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onDone: PropTypes.func,
    onCancel: PropTypes.func
  }

  onOpen = () => {
    const { onOpen } = this.props
    onOpen && onOpen()
  }

  onDone = assignment => {
    const { onDone } = this.props
    onDone && onDone(assignment)
  }

  onCancel = () => {
    const { onCancel } = this.props
    onCancel && onCancel()
  }

  render () {
    const {
      buttonStyling,
      buttonDisabled,
      buttonText,
      open
    } = this.props
    return (
      <Modal open={open}
        trigger={
          <Button {...buttonStyling}
            disabled={buttonDisabled}
            onClick={this.onOpen}>
            {buttonText || 'New...'}
          </Button>
        }
        onClose={this.onCancel}
        closeIcon >
        <Modal.Header>Add new assignment</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <AssignmentDialogContent onDone={this.onDone} buttonStyling={buttonStyling} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export { AssignmentDialog }
