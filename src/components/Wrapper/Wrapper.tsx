import React, { FC } from 'react';
import './Wrapper.css';

type Props = {
  className: string;
};

const Wrapper: FC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Wrapper;
