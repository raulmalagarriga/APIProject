const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=8d210497288b4676b53f07d59dfc74b2";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}