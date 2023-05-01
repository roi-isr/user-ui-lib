import React from "react";
import Card from "@mui/material/Card";
import { userType } from "../../types";

import style from "./User.module.scss";

function User({ user }: { user: userType }) {
  const { country, city, street } = user.location;
  return (
    <Card className={style.card}>
      <h1>{user.name}</h1>
      <img className={style.image} src={user.image_url}></img>
      <h4>{user.email}</h4>
      <h4>{`${street}, ${city}, ${country}`}</h4>
    </Card>
  );
}

export default User;
