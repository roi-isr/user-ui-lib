import React from "react";
import User from "./User";
import { userType } from "../../types";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

import style from "./UsersLayout.module.scss";

function UsersLayout() {
  const users = useSelector((state: RootState) => state.users.users);
  return (
    <div className={style.layout}>
      {users.length > 0 ? (
        users.map((user) => <User key={user.uuid} user={user} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default UsersLayout;
