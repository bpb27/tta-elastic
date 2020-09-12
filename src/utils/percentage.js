export const percentage = (amount, total, digits = 2) => {
  const fraction = amount / total;
  const percentage = fraction * 100;
  const roundedPercentage = percentage.toFixed(digits);
  return `${roundedPercentage}%`;
};
