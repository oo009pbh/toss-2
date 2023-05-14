import { Ref } from 'react';

export interface DOMEvent<T extends EventTarget> extends Event {
  readonly target: T;
}

export interface CallBackEventFuncType {
  (callback: (e: Event) => void): Ref<HTMLElement>;
}
