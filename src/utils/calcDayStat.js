const parseTime = (data) => {
  const [hours, minutes] = data.split('-').map((el) => +el);
  return {
    hours,
    minutes,
  };
};

export default (start, end) => {
  const { hours: endHours, minutes: endMinutes } = parseTime(end);
  const { hours: startHours, minutes: startMinutes } = parseTime(start);

  const minutesDiff = endMinutes - startMinutes;

  if (minutesDiff < 0) {
    return {
      hours: endHours - startHours - 1,
      minutes: 60 - Math.abs(endMinutes - startMinutes),
    };
  }

  const hours = endHours - startHours;
  const minutes = minutesDiff;
  return {
    hours,
    minutes,
  };
};
