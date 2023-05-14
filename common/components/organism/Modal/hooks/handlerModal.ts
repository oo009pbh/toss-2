import React, { useState, useEffect, useRef } from 'react';

// Type
import { ModalHandlerFuncType, ChangeModalValueFuncType, ChangeModalParamsFuncType } from '@typings/modal';

/**
 * @description modal을 조작하는 핸들러, 모달에서 사용하는 data와 function을 반환합니다.
 * @description params = 모달 내에서 사용하는 data state
 * @description isOpen = 모달 노출 여부 (true: 노출, false: 안보이는 상태)
 * @description onToggleModal = 실행시 모달 노출여부가 변경
 * @description onChangeModalValue = params에 data 필드 하나를 변경하는 함수.
 * @description onChangeModalParams = params에 data 여러개를 변경하는 함수.
 *
 * @param {function} initParams - params를 초기화 해주는 함수
 *
 *  @returns {{
 *     isOpen,
 *     params,
 *     setParams,
 *     modalRef,
 *     onToggleModal,
 *     onChangeModalValue,
 *     onChangeModalParams,
 * }}
 *
 */
export const handlerModal: ModalHandlerFuncType = (initParams = (prevState) => prevState) => {
  const [params, setParams] = useState({});
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setParams(initParams);
  }, []);
  const onToggleModal = () => {
    if (modalRef.current) {
      if (modalRef.current.open) {
        modalRef.current.close();
      } else {
        modalRef.current.showModal();
      }
    } else {
      console.log('모달의 핸들러 설정이 잘못 되었습니다.');
    }
  };
  const onChangeModalValue: ChangeModalValueFuncType = (field, value, toggleModal = false) => {
    setParams((prevState) => ({ ...prevState, [field]: value }));
    if (toggleModal) onToggleModal();
  };

  const onChangeModalParams: ChangeModalParamsFuncType = (p, toggleModal = false) => {
    setParams((prevState) => ({ ...prevState, ...p }));
    if (toggleModal) onToggleModal();
  };

  return {
    params,
    setParams,
    modalRef,
    onToggleModal,
    onChangeModalValue,
    onChangeModalParams,
  };
};
