import {
	Observable,
	fromEvent,
	forkJoin,
	combineLatest,
	of,
	zip,
	from,
	interval,
	iif,
	timer,
	defer,
	throwError,
	concat,
} from 'rxjs';

import {
	map,
	tap,
	filter,
	debounceTime,
	switchMap,
	exhaustMap,
	mergeMap,
	delay,
	delayWhen,
	concatMap,
	catchError,
	shareReplay,
	retryWhen,
	take,
	Subject,
	BehaviorSubject,
	ReplaySubject,
	AsyncSubject,
	retry,
	scan,
	repeat,
	distinctUntilChanged,
	distinct,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { validEmail, validPassword, emailExists, registerEmail } from '../util/helpers.js';
console.log(`%cREGISTER with JSON SERVER and Users...`, 'color:blue; font-size:18px');

// Store form data
const formData = {
	email: '',
	password: '',
	agree: false,
	emailAvailable: false,
	id: 1,
};
var regEmail = new FormData();
// DOM elements
const button = document.getElementById('btnSubmit');
const output = document.getElementById('output');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cbo = document.getElementById('cbo');

const validationEmail = document.getElementById('validation-email');
const validationPassword = document.getElementById('validation-password');

const email$ = fromEvent(email, 'keydown').pipe(
	debounceTime(750),
	filter((e) => e.target.value.length > 3),
	map((x) => x.target.value),
	map(function checkEmailIsValid(email) {
		formData.validEmail = validEmail(email, validationEmail);
		formData.email = email;
		return validEmail(email, validationEmail);
	}),
	filter((x) => x), // if it is not a valid email no need to run ajax check
	switchMap(() => ajax(emailExists(formData.email))),
	tap((jsonData) => {
		let result = jsonData.response;
		console.log('EMAIL EXISTS', result);
		// let result = { email: 'p@c.com', valid: true, message: 'ALL OK' };
		// console.log(result);
		// console.log(`%c${result.email} available? ${result.valid}`, 'color:green;font-size:18px;');

		validationEmail.innerHTML += `<b> ${formData.email} ${result.id} available</b>`;
	}),
	tap((result) => {
		console.log('L87', result.status);
		if (result.status) {
			formData.emailAvailable = true;
			console.log('email avail');
		} else {
			formData.emailAvailable = false;
			console.log('email NOT avail');
		}
	}),
);

const password$ = fromEvent(password, 'keyup').pipe(
	debounceTime(750),
	map((x) => x.target.value),
	map(function checkPassword(password) {
		formData.validPassword = validPassword(password, validationPassword);
		formData.password = password;
		return validPassword(password, validationPassword);
	}),
	// tap(password => (formData.password = password)),
);

const cbo$ = fromEvent(cbo, 'click').pipe(tap(() => (formData.agree = cbo.checked)));

combineLatest([email$, password$, cbo$]).subscribe(() => {
	console.log(`%C Form Data: `, formData);
	if (formData.validEmail && formData.emailAvailable && formData.validPassword && formData.agree) {
		// console.log('VALID FORM');
		button.removeAttribute('disabled');

		button.textContent = 'SUBMIT';
		output.innerHTML = '';
	} else {
		// console.log('INVALID FORM');
		let errMsg = '';
		button.setAttribute('disabled', true);
		button.textContent = 'DISABLED';
		if (!formData.emailAvailable) {
			errMsg += `<li>${formData.email} is already registered.</li>`;
		}
		if (!formData.agree) {
			errMsg += '<li>You cannot register unless you agree to the site rules.</li>';
		}
		output.innerHTML = errMsg;
	}
});

///////////////////////////////////////////////////
const ajaxOptions = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		email: formData.email,
	}),
};
const arr = [];
const button$ = fromEvent(button, 'click').pipe(
	// we need concat as we want to have identifiable order in the array arr
	concatMap(() => {
		const val = ajax.getJSON(`http://localhost:3000/x`);
		console.log('before flattening', val);

		return val;
	}),
	concatMap((val) => {
		console.log('after flattening', val);
		arr.push(val);
		const c = ajax.getJSON(`http://localhost:3000/d?r=0.3`);
		return c;
	}),
	concatMap((d) => {
		arr.push(d);
		const rndUser = ajax.getJSON(`https://randomuser.me/api/?results=3}`);
		return rndUser;
	}),

	concatMap((randomUser) => {
		//	console.log('333333333333');
		//console.log('randomuser', randomUser);
		//console.log('route c');
		arr.push(randomUser);
		const c = ajax.getJSON(`http://localhost:3000/c?r=0.9`);

		return c;
	}),

	concatMap((ajaxResponseOfUsers) => {
		arr.push(ajaxResponseOfUsers);
		//console.log('ajaxResponseOfUsers', ajaxResponseOfUsers);
		return of(ajaxResponseOfUsers);
	}),
);
button$.subscribe({
	next() {
		console.log('arr', arr);
		console.log('arr[0]', arr[0]);
	},
	error(error) {
		console.error(error);
	},
	complete(res) {
		console.log('complete with ', res);
	},
});
