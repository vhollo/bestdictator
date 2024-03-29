import { readable, derived } from 'svelte/store';
import { writable } from 'svelte-persistent-store/dist/local';

export const bckid = writable('bckid', '');
export const score = writable('score', {});
export const score_sum = derived(score, ($score => Object.values($score).reduce((a, b) => a + b, 0)));
export const threshold = readable(20);
