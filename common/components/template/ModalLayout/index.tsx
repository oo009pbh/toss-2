import React, { useEffect, FC, PropsWithChildren } from 'react';
import { css as emotionCss } from '@emotion/react';

// Styles
import { CenterModalLayout } from './styles';

// Type
import { ModalLayoutType } from '@typings/modal';
import { DOMEvent } from '@typings/event';

/**
 * @description 중앙정렬 모달 레이아웃
 * @param props
 * @param {object} props.handler 해당 모달을 조작하는 함수 (path: client/src/component/organism/Modal/handlerModal.ts)
 * @param {String} props.className 해당 모달의 클래스 네임 지정
 * @param {emotionCss} props.css 해당 모달의 커스텀 디자인 (import { css } from "@emotion/react" 필요)
 *
 * @return {JSX.Element}
 */
const index: FC<PropsWithChildren<ModalLayoutType>> = ({ handler, className = '', css = emotionCss``, children }) => {
  const { modalRef } = handler;

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.addEventListener('click', (event: Event) => {
        const { target } = event as DOMEvent<HTMLDialogElement>;
        if (target.nodeName === 'DIALOG') {
          modalRef.current?.close();
        }
      });
    }
  }, [modalRef]);

  return (
    <CenterModalLayout className={className} css={css} ref={modalRef}>
      {children}
    </CenterModalLayout>
  );
};

export default index;
