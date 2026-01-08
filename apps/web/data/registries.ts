export const fetchRegistries = async () => {
  const response = await fetch("http://localhost:3322/registries");

  if (!response.ok) {
    return null;
  }

  const res = await response.json();

  console.log("Fetched registries:", res);

  return res;
};
