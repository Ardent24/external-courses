function myFetch(url, response, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.open(response, url);

    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);

    xhr.send(data);
  });
}

myFetch('https://jsonplaceholder.typicode.com/users/', 'GET', 'data').then(item => console.log(item))