export default (prevVal, toAddVal) => {
  const { hours: toAddHours, minutes: toAddMinutes } = toAddVal;
  if (!prevVal) {
    return {
      hours: toAddHours,
      minutes: toAddMinutes,
    };
  }

  const { hours: prevHours, minutes: prevMinutes } = prevVal;
  const additionalHours = Math.floor((prevMinutes + toAddMinutes) / 60);

  const hours = prevHours + toAddHours + additionalHours;
  const minutes = (prevMinutes + toAddMinutes) % 60;

  return {
    hours,
    minutes,
  };
};
