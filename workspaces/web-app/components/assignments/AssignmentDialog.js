import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
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
    console.log('onOpen')
    const { onOpen } = this.props
    onOpen && onOpen()
  }

  onDone = () => {
    console.log('onDone')
    const { onDone } = this.props
    onDone && onDone()
  }

  onCancel = () => {
    console.log('onCancel')
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
            <p>Hello!</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export { AssignmentDialog }
