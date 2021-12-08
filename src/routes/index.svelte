<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="md:align-middle md:justify-center flex flex-col">
	<div>
		<h2 class="font-bold text-4xl">SHINDOU MIHOU</h2>
		<p class="font-bold text-2xl text-gray-100">I'm from the Philippines, born on December 22, 2004 with experiences on back-end, front-end development, devops.</p>
		<p class="py-4 font-normal text-2xl text-gray-100">My hobbies consist of fantasy web-novel writing, cinematography and photography, listening to music and reading mangas, webtoons or long-strip.</p>
	</div>
	<div class="flex flex-row gap-4">
		<a href="https://github.com/ShindouMihou" data-tippy-content="Follow me on GitHub"><Fa icon={faGithub} size="lg"></Fa></a>
		<a href="https://discord.gg/SWj44TB" data-tippy-content="Join me on Discord"><Fa icon={faDiscord} size="lg"></Fa></a>
	</div>
</div>