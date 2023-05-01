import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { userType } from "../../types";

import style from "./User.module.scss";

function User({ user }: { user: userType }) {
  const { country, city, street } = user.location;
  return (
    <Card className={style.card} style={{ boxShadow: "1px 1px 7px #000" }}>
      <h1 className={style.name}>{user.name}</h1>
      <img className={style.image} src={user.image_url}></img>
      <h4 className={style.email}>{user.email}</h4>
      <h4 className={style.address}>{`${street}, ${city}, ${country}`}</h4>
      <Button className={style.editBtn} variant="outlined" color="info">
        Edit
      </Button>
      <Button className={style.deleteBtn} variant="outlined" color="error">
        Delete
      </Button>
    </Card>
  );
}

export default User;
