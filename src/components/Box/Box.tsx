import React, { FC } from 'react';
import './Box.css';

type BoxType = {
  className: string;
  key: number;
};

type BtnType = {
  onClick: () => void;
};

const Box: FC<BoxType> = ({ className, key, children }) => {
  return (
    <div className={`box ${className}`} key={key}>
      {children}
    </div>
  );
};

export const CloseBtn :FC<BtnType> = ({ onClick }) => {
  return (
    <button
      className="button-close"
      type="button"
      onClick={onClick}
    >
      x
    </button>
  );
};

export default Box;
