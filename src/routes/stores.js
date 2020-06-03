import { readable, writable, derived } from 'svelte/store';

export const bckid = writable('');
export const score = writable({});
export const score_sum = derived(score, ($score => Object.values($score).reduce((a, b) => a + b, 0)));
//const summed = derived([a, b], ([$a, $b]) => $a + $b);
export const threshold = readable(15);
