import {writable} from "svelte/store";

export const homescreenBackgroundStyle = 'background-image: url(\'/assets/Unexpected Land.jpg\')'

export let background = writable('bg-black')
export let text = writable('text-white')
export let currentPage  = writable('homescreen')
export let splashscreen = writable(true)
export let currentTitle = writable('Shindou Mihou')
export let backgroundStyle = writable(homescreenBackgroundStyle)