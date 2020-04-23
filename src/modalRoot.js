import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'    
import { default as modalTypes } from './components'

const MODAL_TYPES = {
'confirm': modalTypes.confirmModal,
  
}
const mapStateToProps = state => ({
    ...state.modal
  })
class ModalContainer extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        modalIsOpen: props.modalProps.open
      }
     
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.modalProps.open !== this.props.modalProps.open) {
          this.setState({
            modalIsOpen: nextProps.modalProps.open
          })
        }
    }
    render() {
        if (!this.props.modalType) {
            return null
          }
          const SpecifiedModal = MODAL_TYPES[this.props.modalType]
          console.log(SpecifiedModal)
          return (
            <div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                overlayClassName="modal fade show"
                bodyOpenClassName="modal-open"
                className="modal-dialog modal-dialog-centered"
              >
                <SpecifiedModal
                  closeModal={this.closeModal}
                  {...this.props.modalProps}
                />
              </Modal>
            </div>
          )
  }
}
export default connect(mapStateToProps, null)(ModalContainer)