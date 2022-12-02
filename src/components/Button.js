import React from 'react'

export const Button = ({ clsNm, label, onClick,}) => {
  return (
    <>
      <div
        className={clsNm}
        onClick={() => {
          onClick(label);
        }}
      >
        {label}
      </div>
    </>
  );
};
