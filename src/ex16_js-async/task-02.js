const API_USER = 'https://jsonplaceholder.typicode.com/users/';

const debounce = (fn) => {
  let timeout;
  return function () {
    const fnCall = () => fn.apply(this, arguments)
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, 1000)
  };
}

function onChange(event) {
  getUsers(event.target.value);
}

async function getUsers(nameUser) {
  const response = await fetch(API_USER);
  const responseJSON = await response.json();
  console.log(responseJSON)
  responseJSON.forEach(item => {
    if(item.username == nameUser) console.log(`${item.name} email:${item.email}`)
  })
}

onChange = debounce(onChange);
getUsers();

document.querySelector('.input').addEventListener('keyup', onChange);



