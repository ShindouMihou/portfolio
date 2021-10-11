<script>
	import '../app.css';
	import {AcademicCap, Beaker} from 'svelte-hero-icons';
	import Icon from 'svelte-hero-icons/Icon.svelte';
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import {onMount} from 'svelte';

	onMount(() => {
		tippy('[data-tippy-content]');
	});
</script>

<svelte:head>
<title>Shindou Mihou | Ocean Blue</title>
<meta name="og:title" content="Who is Shindou Mihou?"/>
<meta name="og:description" content="Shindou Mihou is the developer of Mana and many other projects from the Philippines."/>
<meta name="og:image" content="Placeholder"/>
</svelte:head>

<div class="flex flex-row justify-between px-14 md:px-32 lg:px-64 py-6 bg-black text-white wei">
	<a href="/" class="text-4xl font-light hover:text-yellow-400 transition duration-500 hover:scale-110 antialiased">Mihou</a>
	<div class="flex flex-row gap-4">
		<a href="/edu" data-tippy-content="Experience">
			<Icon src="{AcademicCap}" class="h-6 w-6 hover:text-blue-400 transition duration-500 hover:scale-110 antialiased"/>
		</a>
		<a href="/works" data-tippy-content="Works">
			<Icon src="{Beaker}" class="h-6 w-6 hover:text-yellow-400 transition duration-500 hover:scale-110 antialiased"/>
		</a>
	</div>
</div>
<main class="px-14 md:px-32 lg:px-64 py-6 bg-black text-white wei fadeIn">
	<slot></slot>
</main>

<footer class="px-14 md:px-32 lg:px-64 py-6 bg-black text-white wei fadeIn">
	<p class="font-light">Built by Shindou Mihou</p>
	<p class="font-light">with Svelte and Tailwind</p>
</footer>

<style>
	:root {
		background-color: black;
		color: white;
	}
</style>