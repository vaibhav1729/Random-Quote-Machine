fetch('http://api.forismatic.com/api/1.0/').then(response => {
  if (response.ok){
    return response.json();
  }

  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => jsonResponse)