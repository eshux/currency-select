import React, { FC } from 'react';
import './Checkbox.css';

type Props = {
  id: string;
  checked: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  name: string;
};

const Checkbox: FC<Props> = ({ id, checked, onChange, name }) => {
  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        onChange={onChange}
      />
      <div className="checkbox__checkmark">
        <span className="checkbox__checkmark-image">x</span>
      </div>
      <label className='label' htmlFor={id}>{name}</label>
    </div>
  );
};

export default Checkbox;
