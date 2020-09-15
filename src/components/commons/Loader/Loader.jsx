import React from 'react';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.loading}>
      <div className={style.preloader}></div>
    </div>
  )
};

export default Loader;
