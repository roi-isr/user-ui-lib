import React from "react";
import User from "./User";
import { userType } from "../../types";

import style from "./UsersLayout.module.scss";

function UsersLayout({ users }: { users: userType[] }) {
  return (
    <div className={style.layout}>
      {users &&
        users.map((user) => <User key={user.uuid || user.email} user={user} />)}
    </div>
  );
}

export default UsersLayout;
