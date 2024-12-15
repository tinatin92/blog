import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


dayjs.extend(relativeTime);


export const createTimestamp = (): string => {
  return dayjs().toISOString();
};