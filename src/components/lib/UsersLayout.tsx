import React from "react";
import User from "./User";
import { userType } from "../../types";

import style from "./UsersLayout.module.scss";

function UsersLayout({ users }: { users: userType[] }) {
  return (
    <div className={style.layout}>
      {users && users.map((user) => <User user={user} />)}
    </div>
  );
}

export default UsersLayout;
