  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=&callback=", function (a) {
    $("#quote").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
  });