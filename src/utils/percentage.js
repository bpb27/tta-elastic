export const percentage = (amount, total) => {
  const fraction = amount / total;
  const percentage = fraction * 100;
  const roundedPercentage = percentage.toFixed(2);
  return `${roundedPercentage}%`;
};
