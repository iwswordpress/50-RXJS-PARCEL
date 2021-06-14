export function btnShow() {
   button.style.display = 'inline';
   console.log('showing button...');
}
export function getUsers(x) {
   const url = 'https://api.github.com/users?per_page=' + x.target.value;
   console.log('URL is  ', url);
   return url;
}
export function getRandomUsers(x) {
   const url = 'https://randomuser.me/api/?results=' + x.target.value;
   console.log('URL is  ', url);
   return url;
}
export function getLocations(x) {
   const url = 'https://wp-html.co.uk/api/wp-json/wordcamp/v2/locations/lo';
   console.log('URL is  ', url);
   return url;
}

export function validNumberOfusers(val, el) {
   if (val < 3) {
      el.innerHTML = 'INVALID entry';
   } else {
      el.innerHTML = 'Valid entry...thank you.';
   }
}
export function validEmail(val, el) {
   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)) {
      console.log('VALID EMAIL');
      el.innerHTML = 'VALID';
      return true;
   } else {
      console.log('!!!INVALID EMAIL');
      el.innerHTML = 'NOT VALID';
      return false;
   }
}

export function validPassword(val, el) {
   if (val.length < 6) {
      console.log('!!!INVALID PWD');
      el.innerHTML = '6 or more characters required';
      return false;
   } else {
      console.log('VALID LENGTH ');
      el.innerHTML = 'VALID LENGTH';
      return true;
   }
}
export function printLatLon(value, id, city, lat, lon) {
   const container = document.getElementById('results-container');
   const item = document.createElement('a');
   item.innerHTML = `${value}<br>`;
   item.setAttribute('id', id);
   item.setAttribute('city', city);
   item.setAttribute('lat', lat);
   item.setAttribute('lon', lon);
   item.setAttribute('href', '#!');
   item.className = '';
   container.appendChild(item);
}

export function createCard(data) {
   `${arrUsers[i].login} has url: ${arrUsers[i].url}<br>`;
}
