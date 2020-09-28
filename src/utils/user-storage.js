const LAST_VISIT = 'LAST_VISIT';

export const setLastVisitDate = () => {
  try {
    const date = new Date().getTime();
    localStorage.setItem(LAST_VISIT, date);
    return { date };
  } catch (error) {
    return { error };
  }
};

export const getLastVisitDate = () => {
  try {
    const date = new Date(localStorage[LAST_VISIT]).getTime();
    return { date };
  } catch (error) {
    return { error };
  }
};
