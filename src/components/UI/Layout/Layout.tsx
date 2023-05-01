import React from 'react';
import style from './Layout.module.scss'

type props = {
    children: JSX.Element
}

function Layout({children}: props) {
  return (
    <div className={style.layout}>
      {children}
    </div>
  );
}

export default Layout;
