import React from "react";
import Card from "@mui/material/Card";

import style from "./User.module.scss";

type props = {
  user: {
    name: string;
    email: string;
    image_url: string;
    location: {
      country: string;
      city: string;
      street: string;
    };
    uuid: string;
  };
};

function User({ user }: props) {
  return (
    <Card className={style.card}>
      <h1>{user.name}</h1>
      <img src={user.image_url}></img>
      <h4>{user.email}</h4>
    </Card>
  );
}

export default User;
