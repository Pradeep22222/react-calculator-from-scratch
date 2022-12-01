import React from 'react'
import { Button } from './Button';

export const ButtonArea = () => {
    const buttonList = [
      {
        className: "box box-Ac",
        label: "AC",
      },
      {
        className: "box box-pdm",
        label: "C",
      },
      {
        className: "box box-percent",
        label: "%",
      },
      {
        className: "box box-divide",
        label: "?",
      },
      {
        className: "box box-7",
        label: "7",
      },
      {
        className: "box box-8",
        label: "8",
      },
      {
        className: "box box-9",
        label: "9",
      },
      {
        className: "box box-x",
        label: "*",
      },
      {
        className: "box box-4",
        label: "4",
      },
      {
        className: "box box-5",
        label: "5",
      },
      {
        className: "box box-6",
        label: "6",
      },
      {
        className: "box box-minus",
        label: "-",
      },
      {
        className: "box box-1",
        label: "1",
      },
      {
        className: "box box-2",
        label: "2",
      },
      {
        className: "box box-3",
        label: "3",
      },
      {
        className: "box box-plus",
        label: "+",
      },
      {
        className: "box box-zero",
        label: "0",
      },
      {
        className: "box box-dot",
        label: ".",
      },
      {
        className: "box box-equals",
        label: "=",
      },
    ];
  return (
    <>
      
          {buttonList.map((item, index) => {
          return <Button clsNm={item.className} label={item.label}></Button>
      })}
     
    </>
  );
}
