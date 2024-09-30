import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import Notification from "./notification";
import Eventview from "../Student/Eventview";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popupstucaller(props) {
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
            height: "100%", // Make the DialogContent take up full height
            display: "flex", // Add flex display to adjust its content properly
            flexDirection: "column", // Ensure column layout
          },
          "& .MuiDialogActions-root": {
            padding: 0,
          },
          "& .MuiPaper-root": {
            width: "350px",
            height: "650px",
          },
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
        <div className={`container ${darkMode ? "dark-mode" : ""}`}>
          <div className="eventinfobox">
            <div className="myeventtitle">
              <div className="myeventtit">Event Details :</div>
              <div>
                <button className="cross close-button" onClick={props.onc}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
            <div className="activity-info">
              <div className="info-row">
                <div className="info-column">
                  <div className="info-item">
                    <span className="labelee">Activity Name</span>
                    <span className="value">: {row.Activity_name}</span>
                  </div>
                  <div className="info-item">
                    <span className="labelee">Activity Category</span>
                    <span className="value">: {row.Activity_type}</span>
                  </div>
                  <div className="info-item">
                    <span className="labelee">Mode of the Event</span>
                    <span className="value">: {row.seat}</span>
                  </div>
                  <div className="info-item">
                    <span className="labe">PS Level cleared</span>
                    <span className="value">: </span>
                  </div>
                  <div className="info-item">
                    <span className="labe">Date</span>
                    <span className="value">: {row.Date}</span>
                  </div>
                </div>
                <div className="info-column">
                  <div className="info-item">
                    <span className="labele">Activity Type</span>
                    <span className="value">: {row.Tpye}</span>
                  </div>
                  <div className="info-item">
                    <span className="labele">Points(Max)</span>
                    <span className="value">: {row.points}</span>
                  </div>
                  <div className="info-item">
                    <span className="labele">Organizer</span>
                    <span className="value">: {row.Organier}</span>
                  </div>
                  <div className="info-item">
                    <span className="labele">Duration</span>
                    <span className="value">: 3 hours</span>
                  </div>
                  <div className="info-item">
                    <span className="labe">Date</span>
                    <span className="value">: {row.Date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="myeventdescription">
              <div className="myeventdesctit">About Event :</div>
              <div className="myeventtexdescr">{row.descr}</div>
            </div>

            <div className="myeventregis"></div>
          </div>
        </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
