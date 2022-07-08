import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const parseTime = (data) => dayjs(data, 'HH-mm');

export default (start, end) => {
  const timeUpTo = parseTime(end);
  const timeFrom = parseTime(start);

  const timeDiff = timeUpTo
    .subtract(timeFrom.hour(), 'hours')
    .subtract(timeFrom.minute(), 'minutes');

  return {
    hours: timeDiff.hour(),
    minutes: timeDiff.minute(),
  };
};
