import React from "react";
import User from "./User";
import style from "./UsersLayout.module.scss";

type props = {
  users: {
    name: string;
    email: string;
    image_url: string;
    location: {
      country: string;
      city: string;
      street: string;
    };
    uuid: string;
  }[];
};

function UsersLayout({ users }: props) {
  return (
    <div className={style.layout}>
      {users && users.map((user) => <User user={user} />)}
    </div>
  );
}

export default UsersLayout;
