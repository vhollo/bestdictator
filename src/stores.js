import { writable, readable, derived, get } from 'svelte/store';
//import { writable } from 'svelte-persistent-store';
import { persist, createLocalStorage } from "@macfja/svelte-persistent-store"

const browser = typeof window !== 'undefined';
//export const bckid = browser ? persist('bckid', '') : writable('bckid', '');
//export const score = browser ? persist('score', {}) : writable('score', {});
 
export const bckid = !browser || !typeof localStorage.path ? writable('') : writable(browser && localStorage.bckid || '');
bckid.subscribe((value) => browser && (localStorage.setItem(`bckid`, value)));
 
export const score = !browser || !typeof localStorage.path ? writable({}) : writable(browser && localStorage.score || {});
score.subscribe((value) => browser && (localStorage.setItem(`score`, value)));

export const score_sum = derived(score, ($score => Object.values($score).reduce((a, b) => a + b, 0)));
//console.log(get(score_sum))
export const threshold = readable(20);
