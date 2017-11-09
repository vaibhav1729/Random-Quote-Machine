
async function getQuote() {
  const quotesUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
  let response = await fetch(quotesUrl);
  if (response.ok) {
    let jsonResponse = await response.json();
    console.log(jsonResponse);
  }
  throw new Error('Request failed!');
}
