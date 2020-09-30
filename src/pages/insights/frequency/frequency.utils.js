import { daysThisYear } from 'utils/date';
import { numberWithCommas } from 'utils/format';

export const tweetsThisYear = byMonth => {
  const year = byMonth.filter(({ date }) => date.includes(new Date().getFullYear()));
  const total = year.reduce((sum, month) => sum + Number(month.count), 0);
  const avg = total ? Math.round(total / daysThisYear()) : 0;
  return {
    avg,
    total
  };
};

export const topDay = byDay => {
  return byDay.sort((a, b) => b.count - a.count)[0];
};

export const tweetsAsPresident = topics => {
  const total = topics.find(stat => stat.name === 'totalAsPresident')?.total;
  return {
    formattedTotal: numberWithCommas(total),
    total,
  };
};
