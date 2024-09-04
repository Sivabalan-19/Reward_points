import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import "./trash.css";
import Rubics from "../component/Rubics";
import RubricsMarkSheet from "./Rubics-fal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Rpadding(props) {
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
        maxWidth="md" // Set the maximum width of the dialog
        fullWidth // Make the dialog take up the full width
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
          <RubricsMarkSheet
            h={handleClose}
            student_id={props.student_id}
            rows={props.row}
            setTask={props.setTask}
            Task={props.Task}
            setShowNotifications1={props.setShowNotifications1}
            setRows={props.setRows}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
