import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";

import AdminRubricsMarkSheet from "./AdminRubricsMarkSheet";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AdminRpadding(props) {
  const [open, setOpen] = React.useState(true);
 
  const handleClose = () => {
    props.setShowNotifications1(false);
    setOpen(false);
  };
 

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="md" 
        fullWidth 
        sx={{
          "& .MuiDialogContent-root": {
            padding: 0,
            height: "100%", // Make the DialogContent take up full height
            display: "flex", // Add flex display to adjust its content properly
            flexDirection: "column", // Ensure column layout
          },
          "& .MuiDialogActions-root": {
            padding: 0,
          },
          "& .MuiPaper-root": {
            width: "600px", // Set custom width if needed
            height: "300px", // Set custom height if needed
          },
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
            
          <AdminRubricsMarkSheet
            h={handleClose}
            student_id={props.student_id}
            Event_id={props.Event_id}
            setShowNotifications1={props.setShowNotifications1}
          setuse={props.setuse}
            
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
