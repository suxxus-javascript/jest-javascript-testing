 const fetch = require('isomorphic-fetch');

 module.exports = url =>
     fetch(url)
     .then(resp => resp.json())
     .then(json => json)
     .catch(err => err.message);
