export const getData = async (url) => {
  let responce = await fetch(url);

  if (!responce.ok) {
    throw new Error(`Coulf not fetch this ${url}, status: ${responce.status}`);
  }

  return await responce.json();
};
