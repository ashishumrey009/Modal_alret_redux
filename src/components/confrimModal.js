import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const ConfirmModal = ({ closeModal, confirmAction, title, message }) => {
    console.log(closeModal,confirmAction,title,message)
    const [open, setOpen] = React.useState(true);
  return (
      <div>
          <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Disagree
          </Button>
          <Button onClick={closeModal} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </div>
   
  )
}

export default ConfirmModal
