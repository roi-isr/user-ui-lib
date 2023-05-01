import React from 'react';

import style from './UsersLayout.module.scss'

type props = {
    users: {
        name: string,
        email: string,
        image_url: string,
        location: {
            country: string,
            city: string,
            street: string
        },
        uuid: string
    }[]
}

function UsersLayout({users}: props) {
  return (
    <div className={style.layout}>
      {users.map(user => <h1>{user.name}</h1>)}
    </div>
  );
}

export default UsersLayout;
