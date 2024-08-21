import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import Rejectpop from './Rejectpopup';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RejectPopupcaller(props,darkMode) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    props.setRejectNotifications(false)

  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="md" // Set the maximum width of the dialog
        fullWidth // Make the dialog take up the full width
        sx={{
          '& .MuiDialogContent-root': {
            padding: 0,
            height: '100%', // Make the DialogContent take up full height
            display: 'flex', // Add flex display to adjust its content properly
            flexDirection: 'column' // Ensure column layout
          },
          '& .MuiDialogActions-root': {
            padding: 0,
          },
          '& .MuiPaper-root': {
            width: '600px', // Set custom width if needed
            height: '290px', // Set custom height if needed
          },
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          
            <Rejectpop h={handleClose}  reject={props.reject} setrejectdetails={props.setrejectdetails}   setRejectNotifications={props.setRejectNotifications} darkMode={darkMode}/>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
