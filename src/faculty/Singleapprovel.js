import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Singleapprovel({props,darkMode}) {
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
        maxWidth="md" 
        fullWidth 
        sx={{
          "& .MuiDialogContent-root": {
            padding: 0,
            height: "100%", 
            display: "flex",
            flexDirection: "column",
          },
          "& .MuiDialogActions-root": {
            padding: 0,
          },
          "& .MuiPaper-root": {
            width: "800px", 
            height: "670px",
          },
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
        
    <div className={` ${darkMode ? 'dark-mode' : ''}`}>
    </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
