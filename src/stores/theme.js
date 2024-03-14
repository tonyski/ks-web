import { writable } from 'svelte/store';

const stored = localStorage.theme;

// Set the stored value or a sane default.
export const theme = writable(stored || 'emerald');

// Anytime the store changes, update the local storage value (if possible).
theme.subscribe((value) => {
	localStorage.theme = value;
	document.documentElement.setAttribute('data-theme', value);
});
