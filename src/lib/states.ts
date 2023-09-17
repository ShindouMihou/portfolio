import {writable} from "svelte/store";

export let background = writable('bg-black')
export let text = writable('text-white')
export let currentPage  = writable('introduction')
export let splashscreen = writable(true)
export let currentTitle = writable('Shindou Mihou')