import { writable } from 'svelte/store';

export const isSearchOpen = writable(false);

export const toggleSearch = () => isSearchOpen.update((value) => !value);
