import { writable } from 'svelte/store';

const hasWindow = typeof window !== 'undefined';
const stored = hasWindow && localStorage.theme;

// Set the stored value or a sane default.
export const theme = writable(stored || 'light');

// Anytime the store changes, update the local storage value (if possible).
theme.subscribe((value) => {
	if (hasWindow) {
		localStorage.theme = value;
		document.documentElement.setAttribute('data-theme', value);
	}
});
