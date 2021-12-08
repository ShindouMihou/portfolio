<script>
	import '../app.css';
	import {Heart, Beaker} from 'svelte-hero-icons';
	import Icon from 'svelte-hero-icons/Icon.svelte';
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import {onMount} from 'svelte';

	onMount(() => {
		tippy('[data-tippy-content]');

		setTimeout(() => {
			document.querySelector('#__loader').classList.add('animate__animated', 'animate__slideOutLeft');

			setTimeout(() => {
				document.querySelector('#__loader').classList.add('hidden');
				document.querySelector('#__content').classList.replace('hidden', 'flex');
				document.querySelector('#__bottom_bar').classList.replace('hidden', 'block');
			}, 1000);

		}, 1500);
	});

	function transition_page(href = '/') {
		document.querySelector('#__content').classList.add('animate__animated', 'animate__slideOutLeft');
		document.querySelector('#__bottom_bar').classList.add('hidden');

		setTimeout(() => {
			document.querySelector('#__loader').classList.remove('hidden');
			document.querySelector('#__loader').classList.replace('animate__slideOutLeft', 'animate__slideInRight');
			document.querySelector('#__content').remove();
			document.querySelector('#__bottom_bar').remove();

		}, 500);

		setTimeout(() => {
			window.location.href = href;
		}, 1000);
	}
</script>

<svelte:head>
<title>If you wanna bring big smile, sing out!</title>
<meta name="og:title" content="Who is Shindou Mihou?"/>
<meta name="og:description" content="Born on December 22, 2004, Shindou Mihou is a full-stack web developer from the Philippines."/>
<meta name="og:image" content="https://mihou.pw/mihou.png"/>
<meta name="theme-color" content="#4de1ff"/>

</svelte:head>

<div class="h-screen w-screen bg-white mt-r text-black align-middle justify-center items-center flex flex-col" id="__loader">
	<Icon src="{Beaker}" class="h-24 w-24 animate animate-bounce"></Icon>
	<h1 class="text-6xl font-bold animate animate-bounce">MIHOU</h1>
</div>
<div class="hidden flex-col md:flex-row" id="__content">
	<div class="p-12 md:w-80 mt-r transition duration-500 min-h-screen navigation__bg__change" id="__base_content">
		<h1 class="font-bold text-6xl animate__animated animate__fadeInUp">If you wanna bring big smile, sing out.</h1>
		<div id="__navigation">
			<div class="flex flex-col animate__animated animate__fadeInDown delay-500">
				<button on:click|self={() => transition_page('/')} class="font-bold text-lg hover:scale-110 duration-500 transition transform outline-none text-left">Home</button>
				<button on:click|self={() => transition_page('/edu')} class="font-bold text-lg hover:scale-110 duration-500 transition transform outline-none text-left">Knowledgebase</button>
				<button on:click|self={() => transition_page('/works')} class="font-bold text-lg hover:scale-110 duration-500 transition transform outline-none text-left">Works</button>
			</div>
		</div>
	</div>
	<div class="p-12 md:p-24 mt-r transition duration-500 flex flex-col contentful select-none" id="__bottom_content">
		<slot></slot>
	</div>
</div>
<div class="hidden bg-white h-20 transition duration-500 navigation__bg__change" id="__bottom_bar">
	<div class="md:hidden p-6 text-black font-bold items-center flex flex-row gap-2 mt-r">
		<Icon src={Heart} class="h-6 w-6 text-red-600" solid></Icon>
		<h2 class="text-xl">MIHOU</h2>
	</div>
</div>


<style>
	:root {
		background-color: black;
		color: white;
		scroll-behavior: smooth;
	}

	#__loader {
		overflow-x: hidden;
		overflow-y: hidden;
		overflow: hidden;
	}
</style>