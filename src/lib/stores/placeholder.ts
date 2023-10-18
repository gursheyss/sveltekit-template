import { writable, type Writable } from 'svelte/store';

export const placeholder: Writable<number> = writable();
