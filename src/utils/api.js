export const request = async path => {
  const apiUrl = window.location.hostname.includes('localhost')
    ? 'http://localhost:3000'
    : 'https://www.thetrumparchive.com';
  const result = await fetch(`${apiUrl}${path}`);
  if (result.ok) {
    const data = await result.json();
    return { data };
  } else {
    return { error: result.statusText };
  }
};
