// Source: https://stackoverflow.com/questions/8064691/how-do-i-pass-along-variables-with-xmlhttprequest
function formatParams(params) {
  return Object
    .keys(params)
    .map(function(key) {
      return key+'='+encodeURIComponent(params[key])
    })
    .join('&');
}

// params is given as a JSON
function get(endpoint, params) {
  const fullPath = endpoint + "?" + formatParams(params);
  return fetch(fullPath).then(res => res.json());
}

// params is given as a JSON
function get(endpoint, params) {
  const fullPath = endpoint + "?" + formatParams(params);
  return fetch(fullPath).then(res => res.json());
}

function post(endpoint, params) {
  return fetch(endpoint, {
    method: 'post',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(params)
  }).then(res => res.json());
}
