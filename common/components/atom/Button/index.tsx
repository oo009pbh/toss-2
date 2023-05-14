import React, { FC, PropsWithChildren } from 'react';
import { cx } from '@emotion/css';

// Styles
import { defaultButtonStyles } from './styles';

// Type
import { ButtonType } from '@typings/atom';

const index: FC<PropsWithChildren<ButtonType>> = ({ className, children, onClick, style }) => {
  return (
    <button style={style} className={cx(defaultButtonStyles, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default index;
