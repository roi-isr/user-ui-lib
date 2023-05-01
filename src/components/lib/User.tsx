import React, { useState, useReducer } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import UserDialog from "../UI/dialog/UserDialog";
import { userType } from "../../types";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";

import style from "./User.module.scss";

function editUserReducer(
  state: object,
  action: { type: string; value: string }
) {
  const stateClone = structuredClone(state);
  switch (action.type) {
    case "name" || "email":
      stateClone[action.type] = action.value;
      break;
    case "country" || "city" || "street":
      stateClone.location[action.type] = action.value;
      break;
  }
  return stateClone;
}

function User({ user }: { user: userType }) {
  const { country, city, street } = user.location;
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [editedUser, dispatchEditedUser] = useReducer(
    editUserReducer,
    structuredClone(user)
  );

  const editDialog = (
    <UserDialog
      title="Edit User"
      closeHandler={() => setShowEditDialog(false)}
      approveHandler={() => {
        console.log(editedUser);
        setShowEditDialog(false);
      }}
    >
      <div className={style.dialog}>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            value={editedUser.name}
            onChange={(e) =>
              dispatchEditedUser({ type: "name", value: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            value={editedUser.email}
            onChange={(e) =>
              dispatchEditedUser({ type: "email", value: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Input
            id="country"
            value={editedUser.location.country}
            onChange={(e) =>
              dispatchEditedUser({ type: "country", value: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="city">City</InputLabel>
          <Input
            id="city"
            value={editedUser.location.city}
            onChange={(e) =>
              dispatchEditedUser({ type: "city", value: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="street">Street</InputLabel>
          <Input
            id="street"
            value={editedUser.location.street}
            onChange={(e) =>
              dispatchEditedUser({ type: "street", value: e.target.value })
            }
          />
        </FormControl>
      </div>
    </UserDialog>
  );

  const deleteDialog = (
    <UserDialog
      title="Create New User"
      closeHandler={() => setShowDeleteDialog(false)}
      approveHandler={() => setShowDeleteDialog(false)}
    >
      <div>Delete user {user.name}?</div>
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
