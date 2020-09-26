import React from "react";
import style from './FormControl.module.css'

const isError = (toched, error) => toched && error;

export const Textarea = ({input, meta, label, ...props}) => {
  const hasError = isError(meta.touched, meta.error);
  const classError = hasError ? ` ${style.error}` : '';
  return (
    <div className={`${style.formControl}${classError}`}>
      <div><label>{label}</label></div>
      <div>
        <textarea {...input} {...props}/>
      </div>
      {hasError && <span className={style.error}>{meta.error}</span>}
    </div>
  )
};

export const Input = ({input, meta, label, ...props}) => {
  const hasError = isError(meta.touched, meta.error);
  const classError = hasError ? ` ${style.error}` : '';
  return (
    <div className={`${style.formControl}${classError}`}>
      <div><label>{label}</label></div>
      <div>
        <input {...input} {...props}/>
      </div>
      {hasError && <span className={style.error}>{meta.error}</span>}
    </div>
  )
};