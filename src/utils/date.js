export const twoDaysFromNow = () => {
  const date = new Date();
  const add = 2;
  date.setDate(date.getDate() + add);
  return date;
};

export const utcTimestampToEST = timestamp => {
  const [date, time] = new Date(timestamp)
    .toLocaleString('en-US', { timeZone: 'America/New_York' })
    .split(', ');

  const [month, day, year] = date.split('/');
  return `${months[month]} ${day} ${year}, ${time} EST`;
};

const re = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
export const validDatestring = value => {
  return re.test(value);
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
