function MyFetch(url, response, data) {
  let xhrPost, xhrGet;

  xhrPost = xhrGet = new XMLHttpRequest();
  xhrPost.responseType = xhrGet.responseType = 'json';

  if (response === 'GET') {
    xhrGet.open(response, url);
    xhrGet.onload = () => (xhrGet.status >= 400) ? console.error(xhrGet.response) : console.log(xhrGet.response);
    return xhrGet.send();
  }
  if (response === 'POST') {
    xhrGet.open(response, url);
    xhrGet.onload = () => (xhrGet.status >= 400) ? console.error(xhrGet.response) : console.log(xhrGet.response);
    return xhrGet.send(data);
  }
}

const fetch = new MyFetch('https://jsonplaceholder.typicode.com/users/', 'POST', 'data');