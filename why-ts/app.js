// api url
var url = 'https://jsonplaceholder.typicode.com/users';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user)
      console.log(user[0].username)
      username.innerText = user[0].username
      email.innerText = user[0].email
      address.innerText = JSON.stringify(user[0].address)
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
