import React, { CSSProperties } from 'react';

export interface ButtonType {
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}
