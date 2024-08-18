export const yearsFromNow = (years = 1) => {
  const date = new Date();
  date.setDate(date.getDate() + years * 365);
  return date;
};

export const trimTime = value => {
  const [hour, minute, secondPlusM] = value.toLowerCase().split(':');
  const [second, m] = secondPlusM.split(' '); // eslint-disable-line no-unused-vars
  return `${hour}:${minute}${m}`;
};

export const utcTimestampToEST = (timestamp, { timeTrim } = {}) => {
  const [date, time] = new Date(timestamp)
    .toLocaleString('en-US', { timeZone: 'America/New_York' })
    .split(', ');

  const [month, day, year] = date.split('/');
  const formattedDate = `${months[month]} ${day}${timeTrim ? '' : dayth(day)} ${year} -`;
  const formattedTime = timeTrim ? trimTime(time) : `${time} EST`;
  return `${formattedDate} ${formattedTime}`;
};

const re = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);

export const validDatestring = value => {
  return re.test(value);
};

export const daysAsPresident = () => {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(2017, 1, 20);
  const secondDate = new Date();
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
};

export const daysThisYear = () => {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(new Date().getFullYear(), 1, 1);
  const secondDate = new Date();
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
};

const months = [
  null,
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const dayth = day => {
  const num = Number(day);
  if ([1, 21, 31].includes(num)) return 'st';
  if ([2, 22].includes(num)) return 'nd';
  if ([3, 23].includes(num)) return 'rd';
  return 'th';
};
