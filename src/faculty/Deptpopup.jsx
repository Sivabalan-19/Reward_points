import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import Deptchoose from "../Student/Deptchoose";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Deptpopup({ setdAta, setRows,setSelected ,selected,saved,setsaved}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeptChoose = (selectedData) => {
    // Pass the selected data back to the parent component
    setdAta(selectedData);
    handleClose();
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
            width: "650px",
            height: "400px",
          },
        }}
      >
        <DialogContent>
          <Deptchoose
            onDeptChoose={handleDeptChoose} // Pass handler to child
            setRows={setRows}
            setdAta={setdAta}
            setSelected={setSelected}
            selected={selected}
            setsaved={setsaved}
            saved={saved}
            handleClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
