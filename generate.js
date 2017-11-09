let crossOrigin = "https://crossorigin.me";
let http = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en'; 

function getQuote() {
  fetch(crossOrigin + http).then(response => {
    if (response.ok){
      console.log(response.json());
    }
  
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => jsonResponse)  
}
