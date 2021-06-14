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
// function emailExistsGOOD(regEmail) {
// 	return {
// 		url: 'https://wp-html.co.uk/api/wp-json/api/v1/email-available',
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({ data: JSON.stringify({ email: regEmail }) }),
// 	};
// }
export function emailExists(regEmail) {
	const formData = new FormData();
	formData.append('email', regEmail);

	return {
		url: 'https://wp-html.co.uk/api/wp-json/api/v1/email-available',
		method: 'POST',
		body: formData,
	};
}
export function registerEmail(regEmail) {
	const formData = new FormData();
	formData.append('data', regEmail);

	return {
		url: 'https://wp-html.co.uk/api/wp-json/api/v1/mirror',
		method: 'POST',
		body: formData,
	};
}
export function validNumberOfusers(val, el) {
	if (val < 3) {
		el.innerHTML = 'INVALID entry';
	} else {
		el.innerHTML = 'Valid entry...thank you.';
	}
}
export function validEmail(val, el) {
	// console.log('validEmail check');

	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)) {
		// console.log('VALID EMAIL');
		el.innerHTML = '<span>VALID</span>';
		return true;
	} else {
		// console.log('!!!INVALID EMAIL');
		el.innerHTML = '<span>NOT VALID</span>';
		return false;
	}
}

export function validPassword(val, el) {
	if (val.length < 6) {
		//    console.log('!!!INVALID PWD');
		el.innerHTML = '<span >6 or more characters required</span>';
		return false;
	} else {
		//   console.log('VALID LENGTH ');
		el.innerHTML = '<span>VALID LENGTH</span>';
		return true;
	}
}

export function validNotes(val, el) {
	if (val.length < 6) {
		//    console.log('!!!INVALID PWD');
		el.innerHTML = '<span>6 or more characters required</span>';
		return false;
	} else {
		//   console.log('VALID LENGTH ');
		el.innerHTML = '<span>VALID LENGTH</span>';
		return true;
	}
}
export function inStock() {
	return Math.random() > 0.5;
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
