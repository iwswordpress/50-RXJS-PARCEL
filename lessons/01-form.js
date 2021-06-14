// import { ajax } from 'rxjs/ajax';
import { fromEvent, combineLatest } from 'rxjs';
import { tap, filter, debounceTime } from 'rxjs/operators';
import { validEmail, validPassword } from '../util/helpers';

console.log(`%cWEATHER...`, 'color:green; font-size:20px');
// MINE

console.log(`%cWorking...`, 'color:blue; font-size:20px');

const button = document.getElementById('button');
const output = document.getElementById('output');
const email = document.getElementById('email');
const password = document.getElementById('password');
const validationEmail = document.getElementById('validation-email');
const validationPassword = document.getElementById('validation-password');

const email$ = fromEvent(email, 'keyup').pipe(
	debounceTime(1000),
	// take(2), // number of events
	filter(function check(x) {
		const val = x.target.value;
		return validEmail(val, validationEmail);
	}),
);

email$.subscribe(
	function next(x) {
		console.log('[EMAIL SUBSCRIBE] ', x);
	},
	function error(err) {
		console.log(err.message);
	},
	function complete() {
		console.log('Email Completed');
	},
);

const password$ = fromEvent(password, 'keyup').pipe(
	debounceTime(750),
	filter(function check(x) {
		const val = x.target.value;
		return validPassword(val, validationPassword);
	}),
);

password$.subscribe({
	next: (v) => console.log('[PWD SUBSCRIBE] ', v),
	error: (e) => console.error(e),
	complete: () => console.info('complete'),
});
const button$ = fromEvent(button, 'click').pipe(
	// map((x) => {
	// 	x;
	// }),
	tap(() => {
		output.innerHTML = 'Response from AJX validation';
		console.log('AJAX');
	}),
);
// console.log('button$', button$);

button$.subscribe({
	next: (v) => console.log('[BTN SUBSCRIBE] ', v),
	error: (e) => console.error(e),
	complete: () => console.info('complete'),
});
combineLatest([email$, password$]).subscribe(() => {
	console.log('Show Button');
	button.style.display = 'block';
});
