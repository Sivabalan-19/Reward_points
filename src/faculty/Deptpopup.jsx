import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import Deptchoose from '../Student/Deptchoose';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Deptpopup(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
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
            width: '650px', 
            height: '400px', 
          },
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          
            <Deptchoose h={handleClose} rows={props.row} setRows={props.setRows} setdAta={props.setdAta}/>
        
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
