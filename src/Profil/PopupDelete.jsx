import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import { DialogContent, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import UserDelete from "./UserDelete";

const useStyles = makeStyles((theme) => ({
  modif: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupDelete({ open, handleClose ,confirmation}) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.modif}>
          <DialogActions>
            <Button onClick={handleClose} style={{ color: "#4C9A62" }}>
              <CloseIcon />
            </Button>
          </DialogActions>
        </div>
        <DialogContent>
          <UserDelete handleClose={handleClose} confirmation={confirmation}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
