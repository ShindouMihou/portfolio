<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
</script>

<img
	class="h-64 w-64 rounded border-2 border-white  border-dotted my-6 hover:border-solid hover:scale-110 hover:brightness-110 transition duration-500"
	src="/suyaa.png"
	alt="Suyaa"
/>

<div class="animate fadeIn duration-500">
	<h1 class="text-4xl font-bold hover:scale-110 hover:underline transition duration-500">About Me</h1>
	<p class="text-xl font-light">
		I am Shindou Mihou, 16 years old from the Philippines who mainly works with programming
		languages such as <span class="font-bold text-yellow-600">Java</span>,
		<span class="font-bold text-orange-600">Rust</span>,
		<span class="font-bold text-blue-600">PHP</span> and a few other languages.
	</p>
	<p class="py-4 text-xl font-light">
		Other than Programming, I also write mainly fantasy stories on several platforms but mainly on
		ScribbleHub with my favorite genre being Yuri.
	</p>
</div>

<div class="animate fadeIn duration-500 delay-700">
	<h1 class="py-6 text-4xl font-bold hover:scale-110 hover:underline transition duration-500">Hobbies</h1>
	<p class="pb-4 text-xl font-light">
		I don't have much hobbies but if there were a few that I had to mention, it would be reading
		mangas, webtoons and other similar and also playing <a href="https://osu.ppy.sh" class="text-pink-400 hover:underline">osu!</a> which
		is most likely the game that I have played the longest so far.
	</p>
	<p class="pb-4 text-xl font-light">
		Other than those mentioned, I don't really play anything at all nor do anything else... well if
		Discord doesn't count.
	</p>
	<div class="w-full p-4 flex flex-row gap-8  delay-1000">
		<a
			href="https://github.com/ShindouMihou"
			class="hover:text-blue-500 transition duration-500 hover:scale-110 hover:animate-none animate animate-bounce"
			data-tippy-content="GitHub"
		>
			<Fa icon={faGithub} size="2x" />
		</a>
		<a
			href="https://discord.gg/SWj44TB"
			class="hover:text-blue-500 transition duration-500 hover:scale-110 hover:animate-none animate animate-bounce"
			data-tippy-content="Discord"
		>
			<Fa icon={faDiscord} size="2x" />
		</a>
	</div>
</div>

<style>
	.fadeIn {
		animation: fadeIn 900ms ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 100%;
		}
	}
</style>
