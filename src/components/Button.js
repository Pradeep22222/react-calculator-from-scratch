import React from 'react'

export const Button = ({ clsNm, label, onClick }) => {
    const onPressed = (e) => { 
        e.preventDefault();
        onClick(label);
    }
  return (
    <>
          <div className={clsNm} onClick={onPressed}>{label}</div>
    </>
  );
}
