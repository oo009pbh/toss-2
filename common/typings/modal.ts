import React, { CSSProperties, SetStateAction } from 'react';

export interface OneButtonModalType {
  handler: ModalHandlerReturnType;
  buttonClick?: () => void;
  label?: string;
}
export interface ModalLayoutType {
  handler: ModalHandlerReturnType;
  className?: string;
  css?: string;
}
export interface ModalHandlerReturnType {
  params: {};
  setParams: React.Dispatch<React.SetStateAction<{}>>;
  modalRef: React.RefObject<HTMLDialogElement>;
  onToggleModal: () => void;
  onChangeModalValue: ChangeModalValueFuncType;
  onChangeModalParams: ChangeModalParamsFuncType;
}

export interface ModalHandlerFuncType {
  (initParams?: SetStateAction<{}>): ModalHandlerReturnType;
}

export interface ChangeModalValueFuncType {
  (field: string, value: any, toggleModal: boolean): void;
}

export interface ChangeModalParamsFuncType {
  (p: object, toggleModal: boolean): void;
}
