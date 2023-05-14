// Type
import { addParamsToUrlFuncType, querystringToObjectFuncType } from '@typings/util';

/**
 * @description 객체 데이터를 URL 쿼리스트링에 추가해주는 함수
 *
 * @params  {String} baseUrl - 추가할 베이스 URL
 * @params  {Object} params - 포맷팅하려는 parameters
 * @returns {string} 파라미터 key value가 추가된 url string
 */

const addParamsToUrl: addParamsToUrlFuncType = (baseUrl, params) => {
  const url = new URL(baseUrl);
  const searchParams = new URLSearchParams(url.search);

  for (const [key, value] of Object.entries(params)) {
    searchParams.set(key, String(value));
  }

  url.search = searchParams.toString();
  return url.toString();
};

/**
 * @description 쿼리스트링을 객체로 변경해주는 함수
 *
 * @params  {String} querystring - 파라미터를 변경할 쿼리스트링
 * @returns {Object} 쿼리스트링 기반으로 생성된 객체
 */
const querystringToObject: querystringToObjectFuncType = (querystring) => {
  const searchParams = new URLSearchParams(querystring);
  const params: { [key: string]: any } = {};

  for (const [key, value] of searchParams) {
    params[key] = value;
  }

  return params;
};
