const url =
  "https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-13&sortBy=publishedAt&apiKey=024cd4f85a1d468f94286d765f936efb";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
