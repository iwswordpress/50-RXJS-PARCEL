import {
	Observable,
	fromEvent,
	forkJoin,
	combineLatest,
	of,
	zip,
	from,
	empty,
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
	publish,
	publishReplay,
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
	// switchMap(() => ajax(emailExists(formData.email))),
	tap((jsonData) => {
		// let result = jsonData.response;
		let result = { email: 'p@c.com', valid: true, message: 'ALL OK' };
		console.log(result);
		console.log(`%c${result.email} available? ${result.valid}`, 'color:green;font-size:18px;');
		validationEmail.innerHTML += `<b> ${result.email} - ${result.message}</b>`;
		return result;
	}),
	tap((result) => {
		console.log(result);
		if (true) {
			formData.emailAvailable = true;
		} else {
			formData.emailAvailable = false;
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

const button$ = fromEvent(button, 'click').pipe(
	// switchMap(() => ajax(registerEmail(formData.email))),
	tap((jsonData) => {
		// let result = jsonData.response;
		let result = {
			api: 'wphtml-api-v1-mirror 1.0.0',
			valid: true,
			message: 'MIRROR data returned',
			data: 'testp@c.com',
		};
		console.log(result);
		output.innerHTML = `Form data sent to server:<br>
		  email: ${formData.email}<br>
		  password: ${formData.password}<br>
		  agree:  ${formData.agree}<br>

		  <b>
			API: ${result.api}<br>
			Registration status: ${result.valid}<br>
		  Message: ${result.message}</br>
		  Email: ${result.data}</b>

		  `;
	}),
);

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

// Subscribers

button$.subscribe({
	next(x) {
		console.log(`[BUTTON SUBSCRIBE] BUTTON was clicked`);
	},
	error(err) {
		console.log('[BTN SUBSCRIBE]', err.message);
	},
	complete() {
		console.log('Button Completed');
	},
});
