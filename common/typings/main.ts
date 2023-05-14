import React, { CSSProperties } from 'react';

export interface GetDataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface PostDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
