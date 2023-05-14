import React, { FC, PropsWithChildren } from 'react';
import { css } from '@emotion/css';

// Component
import CenterModalLayout from '@template/ModalLayout';
import Button from '@atom/Button';

// Styles
import { Container } from './styles';

// Type
import { OneButtonModalType } from '@typings/modal';

/**
 * @description 중앙정렬 모달
 *
 * @param props
 * @param {object} props.handler 해당 모달에서 사용하는 핸들러(path: client/src/component/organism/Modal/handlerModal.ts)
 * @param {function} props.buttonClick 버튼 클릭시 실행되는 함수 미입력시 모달 닫기
 * @param {string} props.label 버튼 안 텍스트
 *
 * @return {JSX.Element}
 */
export const OneButtonModal: FC<PropsWithChildren<OneButtonModalType>> = ({
  handler,
  buttonClick,
  label = '닫기',
  children,
}) => {
  return (
    <CenterModalLayout handler={handler}>
      <Container>
        {children}
        <Button onClick={buttonClick}>{label}</Button>
      </Container>
    </CenterModalLayout>
  );
};
