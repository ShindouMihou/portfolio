<script>
	import Waves from '../components/waves.svelte';
	import Work from '../components/work.svelte';
	import Github from '../components/github.svelte';
	import Twitter from '../components/twitter.svelte';
	import Discord from '../components/discord.svelte';
	import { onMount } from 'svelte';
	import Beaker from '../components/beaker.svelte';

	onMount(() => {
        disableScrolling();
		setTimeout(() => {
			document.querySelector('#__loader').classList.add('animatecss', 'animatecss-slideOutDown');
			setTimeout(() => {
				document.querySelector('#__loader').classList.add('hidden');
				document.querySelector('#__content').classList.replace('hidden', 'flex');
				setTimeout(() => {
					document.querySelector('.magic__typography__1').classList.replace('hidden', 'flex');
            				document.querySelector('#magic__typography__02').classList.replace('bg-white', 'bg-black');
            				document.querySelector('.magic__typography__1').classList.add('animatecss', 'animatecss-faster', 'animatecss-fadeInUp');

					setTimeout(() => {
						document.querySelector('.magic__typography__2').classList.replace('hidden', 'block');

						setTimeout(() => {
                	    				enableScrolling();
						}, 50);
					}, 450);
				}, 250);
			}, 1000);
		}, 1000);
	});

	function disableScrolling() {
		var x = window.scrollX;
		var y = window.scrollY;
		window.onscroll = function () {
			window.scrollTo(x, y);
		};
	}

	function enableScrolling() {
		window.onscroll = function () {};
	}
</script>

<div class="h-screen w-screen bg-white mt-r text-black align-middle justify-center items-center flex flex-col" id="__loader">
	<Beaker class="h-24 w-24 animate-bounce"></Beaker>
	<h1 class="text-6xl font-bold animate-bounce uppercase text-center">Loading</h1>
</div>
<div class="hidden flex-col" id="__content">
	<div class="flex flex-col bg-white text-black pt-32">
		<div class="p-12 md:p-24 w-full flex flex-col">
			<div class="m-auto flex flex-col justify-between max-w-2xl">
				<div class="flex flex-col">
					<h1 class="font-bold text-6xl animatecss animatecss-fadeInDown">Shindou Mihou</h1>
					<p class="px-1 md:text-center animatecss animatecss-fadeInUp">
						A free bird that flies the empty, starry night skies.
					</p>
				</div>
				<div
					class="flex flex-row gap-4 py-4 px-1 md:justify-center flex-wrap animatecss animatecss-fadeInDown animatecss-delay-750ms"
				>
					<a
						href="https://github.com/ShindouMihou"
						rel="external"
						class="hover:opacity-50 duration-500"
						target="_blank"
					>
						<Github class="h-8 w-8" />
					</a>
					<a
						href="https://twitter.com/MihouSH"
						rel="external"
						class="hover:opacity-50 duration-500"
						target="_blank"
					>
						<Twitter class="h-8 w-8" />
					</a>
					<a
						href="https://discord.gg/Gy2vKkJjET"
						rel="external"
						class="hover:opacity-50 duration-500"
						target="_blank"
					>
						<Discord class="h-8 w-8" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<div
		class="flex-col hidden w-screen magic__typography__1"
	>
		<Waves />
	</div>
	<div
		class="p-8 min-h-screen flex-col bg-white"
        id="magic__typography__02"
	>
		<div class="m-auto hidden animatecss animatecss-faster animatecss-fadeInUp magic__typography__2 prose prose-invert prose-h2:text-6xl prose-h3:text-4xl prose-h4:text-xl">
			<h3 class="font-bold" id="bio">Biography</h3>
			<p>
				Born on December 22, 2004 on Bohol, Philippines; I am a full-stack developer who likes to
				engage in many different programming languages with proficiency in Java.
			</p>
			<p>
				Gained from working on solo projects, I know a decent amount of devops, frontend and backend
				development. Although I prefer developing backend development more than anything else.
			</p>
			<h3 class="font-bold" id="bio">Aliases</h3>
			<p>
				I like cute names and because of that... I have quite a few aliases that have accumulated
				over the days but my current aliases consist of the following: <b>Miu</b> and
				<b>Arisa Nagase</b>.
			</p>
			<h3 class="font-bold" id="hobbies">Hobbies</h3>
			<p>
				Webtoons, mangas, long-strip that are either Shoujo-themed or Yuri-themed is my breakfast,
				lunch and dinner. I like to read a lot and I do read a lot of those types of comics, but you
				can't blame me... right
			</p>
			<p>
				But... I am productive! I am also somewhat of a webnovelist who writes stories that are both
				my breakfast, lunch and dinner whenever I feel bored or have ran out of stories to read...
				Yes!
			</p>
			<p>
				Uhh... I also play games but not as much as the average person. Although, I once went
				through a gaming period where I played plenty of mobile MMORPGs such as Laplace M and Black
				Desert Online, but other than that, I play Minecraft and osu! nowadays at times.
			</p>
			<h3 class="font-bold" id="proficiency">Proficiency</h3>
			<p>
				Talent is not in my genetics as far as I am concerned but that doesn't stop me from learning
				all sorts of things and that includes programming languages which goes from <b>Java</b>,
				<b>Rust</b>, <b>PHP</b>, <b>Javascript</b>, <b>Typescript</b> and so many more.
			</p>
			<p>
				Although I know all of those languages, my main proficiency lies in Java which has been a
				language that I've used for quite a long time now. I also know several technologies such as <b
					>MongoDB</b
				>, <b>Redis</b>, <b>Docker</b> and a few more.
			</p>
			<h3 class="font-bold" id="proficiency">Projects</h3>
			<div class="flex flex-row flex-wrap gap-2">
				<Work
					href="https://manabot.fun/"
					icon="https://cdn.discordapp.com/avatars/741288788164345856/8eb9e9a49b04deceb22b95a91c0a4093.png?size=256"
					name="Mana"
					desc="Creator, Discord Bot"
				/>
				<Work
					href="https://github.com/ManaNet/Amelia"
					icon="https://media.discordapp.net/avatars/786464598835986483/8175d0e1793e99b786032be669537a4c.png?size=256"
					name="Amelia"
					desc="Creator, Discord Bot"
				/>
				<Work
					href="https://beemo.gg"
					icon="https://media.discordapp.net/avatars/515067662028636170/47e5abaedee90b70a37826ee3d7435e6.png?size=256"
					name="Beemo"
					desc="Developer, Discord Bot"
				/>
				<Work
					href="https://github.com/ShindouMihou/Celestia"
					icon="https://celebi.manabot.fun/Celestia.png"
					name="Celestia"
					desc="Creator, Logging"
				/>
			</div>
			<a
				class="no-underline hover:opacity-80 duration-500"
				alt="The Vampire Empress"
				rel="external"
				target="_blank"
				href="https://www.scribblehub.com/series/299262/the-vampire-empress/"
			>
				<img src="/assets/images/TVE.png" alt="The Vampire Empress" class="bg-white rounded-sm" />
			</a>
		</div>
	</div>
</div>
