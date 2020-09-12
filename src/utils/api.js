export const apiUrl = localStorage.isDev ? (
  'http://localhost:3000'
) : (
  'https://trump-twitter-archive.herokuapp.com'
);

export const request = async url => {
  const result = await fetch(`${apiUrl}${url}`);
  if (result.ok) {
    const data = await result.json();
    return { data };
  } else {
    return { error: result.statusText };
  }
};
