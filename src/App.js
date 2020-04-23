import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from './modalRoot';
import {connect} from 'react-redux'
import { showModal, hideModal} from './actions'
const MESSAGE = "A redux modal component."
const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps, modalType) => {
      dispatch(showModal({ modalProps, modalType }))
    }
  })
class App extends React.Component{
    constructor(props){
        super(props)
        this.closeModal = this.closeModal.bind(this);
        this.openConfirmModal = this.openConfirmModal.bind(this);
    }
    
  openConfirmModal() {
    
    this.props.showModal({
      open:true,
      title: 'Confirm Modal',
      message: MESSAGE,
      confirmAction: this.closeModal,
      closeModal: this.closeModal
    }, 'confirm')
  }
  closeModal() {
    this.props.hideModal()
  }

    render(){
        return(
            <div >
           
            <Button variant="contained" color="primary"  onClick={this.openConfirmModal}>
              Confirm
            </Button>
            <Modal hideModal={this.props.hideModal} />
          </div>
        )
    }
}

  
export default connect(null, mapDispatchToProps)(App)