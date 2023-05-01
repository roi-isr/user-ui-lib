import React from 'react';

import style from './Header.module.scss'

type props = {
    title: string,
    image_url?: string
}

function Header({title, image_url}: props) {
  return (
    <div className={style.wrapper}>
      {image_url && <img className={style.image} src={image_url}></img>}
      <h1 className={style.title}>{title}</h1>
    </div>
  );
}

export default Header;
