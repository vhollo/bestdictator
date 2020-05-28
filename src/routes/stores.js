import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

export const score = writable(0);
export const threshold = readable(12);