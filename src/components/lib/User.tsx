import React, { useState, useReducer } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import UserDialog from "../UI/dialog/UserDialog";
import { userType } from "../../types";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { updateUser, deleteUser } from "../../features/users/usersSlice";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";

import style from "./User.module.scss";

function editUserReducer(
  state: object,
  action: { type: string; value: string }
) {
  const stateClone = structuredClone(state);
  if (["name", "email"].includes(action.type)) {
    stateClone[action.type] = action.value;
  } else if (["country", "city", "street"].includes(action.type)) {
    stateClone.location[action.type] = action.value;
  }
  return stateClone;
}

function User({ user }: { user: userType }) {
  const fieldsToEdit = ["Name", "Email", "Country", "City", "Street"];
  const { country, city, street } = user.location;
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [editedUser, dispatchEditedUser] = useReducer(
    editUserReducer,
    structuredClone(user)
  );
  const usersDispatch = useDispatch();

  const approveDialog = (action: PayloadAction<any, any>) => {
    usersDispatch(action);
    setShowEditDialog(false);
    setShowDeleteDialog(false);
  };

  const editDialog = (
    <UserDialog
      title="Edit User"
      closeHandler={() => setShowEditDialog(false)}
      approveHandler={() => approveDialog(updateUser(editedUser))}
    >
      <div className={style.dialog}>
        {fieldsToEdit.map((fieldName: string) => {
          return (
            <FormControl key={fieldName}>
              <InputLabel htmlFor={fieldName}>{fieldName}</InputLabel>
              <Input
                id={fieldName}
                value={
                  editedUser[fieldName.toLowerCase()] ||
                  editedUser.location[fieldName.toLowerCase()]
                }
                onChange={(e) =>
                  dispatchEditedUser({
                    type: fieldName.toLowerCase(),
                    value: e.target.value,
                  })
                }
              />
            </FormControl>
          );
        })}
      </div>
    </UserDialog>
  );

  const deleteDialog = (
    <UserDialog
      title="Delete User"
      closeHandler={() => setShowDeleteDialog(false)}
      approveHandler={() => approveDialog(deleteUser(user.uuid))}
    >
      <div>Delete user {user.name}?</div>
    </UserDialog>
  );

  return (
    <>
      <Card className={style.card} style={{ boxShadow: "1px 1px 7px #000" }}>
        <h1 className={style.name}>{user.name}</h1>
        <img className={style.image} alt={user.name} src={user.image_url}></img>
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
