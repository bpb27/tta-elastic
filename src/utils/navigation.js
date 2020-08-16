export const queryParams = url => {
  try {
    const qp = {};
    const searchString = url?.includes('?') ? url.split('?')[1] : url;
    const instance = new URLSearchParams(searchString || window.location.search);
    instance.forEach((value, key) => {
      qp[key] = value;
    });
    return qp;
  } catch (e) {
    console.warn(e);
    return {};
  }
};
