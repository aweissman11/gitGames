const fetchCall = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    return Error(response.statusText);
  }
  return await response.json();
}

export default fetchCall;