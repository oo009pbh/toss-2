/**
 * @providesModule DateUtilService
 */
import dayjs from 'dayjs';
import 'dayjs/locale/ko.js';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';

// Type
import { dateFuncType } from '@typings/util';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

/**
 * @description 서비스를 이용하는 사용자의 타임존
 * @type {string}
 */
const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const currentLocale = Intl.DateTimeFormat().resolvedOptions().locale;

/**
 * @description 날짜 형식을 서식화 해주는 함수
 *
 * @params  {string} fmt - 날짜 출력 format
 * @params  {timestamp} date - 포맷팅하려는 date
 * @returns {string} 위 포맷 조건에 따라 파싱된 date string
 */

export const format: dateFuncType = (format, timestamp) => {
  dayjs.locale(currentLocale || 'ko');
  const time = dayjs(timestamp).tz(currentTimeZone || 'Asia/Seoul');

  switch (format) {
    case 'LLLL':
      return time.format('LLLL'); // 2023년 2월 20일 월요일 오전 12:19
    case 'LLL':
      return time.format('LLL'); // 2023년 2월 20일 오전 12:20
    case 'LTS':
      return time.format('LTS'); // 오전 12:19:47
    case 'LT':
      return time.format('LT'); // 오전 12:19
    case 'L':
      return time.format('L'); // 2023.02.20.
    case 'llll':
      return time.format('llll'); // 2023년 2월 20일 월요일 오전 12:19
    case 'lll':
      return time.format('lll'); // 2023년 2월 20일 오전 12:24
    case 'll':
      return time.format('ll'); // 2023년 2월 20일
    case 'l':
      return time.format('l'); // 2023.02.20.
    case 'dash':
      return time.format('YYYY-MM-DD'); // 2023-02-20
    case 'yearMonth':
      return time.format('YYYY.MM'); // 2023.02
    case 'point':
      return time.format('YYYY.MM.DD'); // 2023.02.20
    case 'pointShort':
      return time.format('YY.MM.DD'); // 23.02.20
    case 'time':
      return time.format('YYYY.MM.DD HH:mm'); // 2023.02.20 00:21
    case 'fullTime':
      return time.format('YYYY-MM-DD HH:mm:ss'); // 2023-02-20 00:22:07
    case 'longNumber':
      return time.format('YYYYMMDD'); // 20230220
    case 'number':
      return time.format('YYMMDD'); // 230220
    case 'year':
      return time.format('YYYY'); // 2023
    default:
      return time.format(format);
  }
};
