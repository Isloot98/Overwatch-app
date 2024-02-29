export const searchApi = async (searchQuery) => {
  const searchResponse = await fetch(
    `https://overfast-api.tekrop.fr/players?name=${searchQuery}&order_by=name%3Aasc&offset=0&limit=20`
  );
  const searchResults = await searchResponse.json();
  const result = searchResults.results;
  console.log(result);
  console.log(searchQuery);

  if (result.length === 0) {
    return "No results";
  }

  return result;
};

export const playerDetailsApi = async (playerId) => {
  const searchResponse = await fetch(
    `https://overfast-api.tekrop.fr/players/${playerId}`
  );
  const searchResults = await searchResponse.json();

  return searchResults;
};
