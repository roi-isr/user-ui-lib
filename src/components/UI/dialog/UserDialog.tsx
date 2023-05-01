import React from "react";
import { headerType } from "../../../types";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import style from "./UserDialog.module.scss";

function UserDialod({
  closeHandler,
  saveHandler,
  title,
  children,
}: {
  closeHandler: () => any;
  saveHandler: () => any;
  title: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <Dialog
      className={style.dialog}
      maxWidth="xl"
      open={true}
      onClose={closeHandler}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={closeHandler} color="error">
          Cancel
        </Button>
        <Button onClick={saveHandler} color="success" autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserDialod;
