import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import UserDialog from "../UI/dialog/UserDialog";
import { userType } from "../../types";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";

import style from "./User.module.scss";

function User({ user }: { user: userType }) {
  const { country, city, street } = user.location;
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const editDialog = (
    <UserDialog
      title="Edit User"
      closeHandler={() => setShowEditDialog(false)}
      saveHandler={() => setShowEditDialog(false)}
    >
      <div className={style.dialog}>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" value={user.name} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" value={user.email} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Input id="country" value={user.location.country} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="city">City</InputLabel>
          <Input id="city" value={user.location.city} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="streen">Street</InputLabel>
          <Input id="streen" value={user.location.street} />
        </FormControl>
      </div>
    </UserDialog>
  );

  const deleteDialog = (
    <UserDialog
      title="Create New User"
      closeHandler={() => setShowDeleteDialog(false)}
      saveHandler={() => setShowEditDialog(false)}
    >
      <div>111</div>
    </UserDialog>
  );

  return (
    <>
      <Card className={style.card} style={{ boxShadow: "1px 1px 7px #000" }}>
        <h1 className={style.name}>{user.name}</h1>
        <img className={style.image} src={user.image_url}></img>
        <h4 className={style.email}>{user.email}</h4>
        <h4 className={style.address}>{`${street}, ${city}, ${country}`}</h4>
        <Button
          onClick={() => setShowEditDialog(true)}
          className={style.editBtn}
          variant="outlined"
          color="info"
        >
          Edit
        </Button>
        <Button
          onClick={() => setShowDeleteDialog(true)}
          className={style.deleteBtn}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
      </Card>
      {showEditDialog && editDialog}
      {showDeleteDialog && deleteDialog}
    </>
  );
}

export default User;
