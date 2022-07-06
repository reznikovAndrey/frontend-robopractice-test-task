const DAYS_QUANTITY = 31;

export const apiUrl = '/api/users';

export const getMonthDaysArr = () => [...Array(DAYS_QUANTITY + 1).keys()];
