import React, { useRef, useEffect } from 'react';

// Type
import { CallBackEventFuncType, DOMEvent } from '@typings/event';

/**
 * @description useOutsideClick 시 callBack 함수가 실행되는 hooks
 * @param {function} callback element 바깥 클릭시 실행되는 함수
 *
 * @return {React.Ref} useOutsideClick callback 함수를 실행하고자 하는 Element 에 넣어주면 끝
 */
const useOutsideClick: CallBackEventFuncType = (callback) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const { target } = event as DOMEvent<HTMLElement>;

      if (ref.current && !ref.current.contains(target)) {
        callback(event);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
