let crossOrigin = "https://crossorigin.me";
let quotesOnDesign = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=&callback=";
let url = crossOrigin + quotesOnDesign;

function getQuote(){$.getJSON(url, function (a) {
    $("#quote").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
  });}