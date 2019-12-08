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
