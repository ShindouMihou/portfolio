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

	// cc: https://stackoverflow.com/a/7091965
	function age(date) {
    	const today = new Date();
    	const birthDate = new Date(date);
    	var age = today.getFullYear() - birthDate.getFullYear();
    	const m = today.getMonth() - birthDate.getMonth();
    	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        	age--;
    	}
    	return age;
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
				I'm a { age("2004 12 22") } years old self-proclaimed full-stack developer from Bohol, Philippines.
				I was born on December 22, 2004 and have been working as a developer for several years now.
			</p>
			<p>
				As someone who works on a lot of solo projects, devops, front-end and back-end development are what I believe 
				are my strengths. I'm also capable of managing databases and caching but I prefer to write back-end code more than 
				any other as it ticks my creativity more.
			</p>
			<h3 class="font-bold" id="bio">Aliases</h3>
			<p>
				I go by multiple aliases which were either made by me or were made by someone else that eventually became a little 
				standard among my nicknames. These consists of: <b>Miu</b> and <b>Arisa Nagase</b>.
			</p>
			<h3 class="font-bold" id="hobbies">Hobbies</h3>
			<p>
				I like to read a lot of webtoons, mangas and long-strips. I don't mind the genre most of time but I tend to align more 
				towards stories such as Korean CEO romance or strong female leads such as <b>Untouchable Lady</b>. I also like to read a lot 
				of Girls' Love such as <b>Please Bully Me, Miss Villainess</b>.
			</p>
			<p>
				Although... I am also a heavy fan of K-Drama with my favorites being <b>A Business Proposal</b>, <b>What's Wrong with Secretary Kim</b>,
				<b>Tomorrow</b> and <b>My Roommate is a Gumiho</b>. I also write webnovels as a little side-hobby.
			</p>
			<p>
				I'm not much of a gamer but I tend to play games that are more towards rythm these days with examples being <b>D4DJ</b> and <b>Arcaea</b> 
				and also <b>osu!</b> but I used to play tons of mobile MMORPGs such as <b>Laplce M</b> and <b>Black Desert Online</b>. I also have a Minecraft 
				account under the name <b>KaoriShiori</b> which was the names of two of my webnovel characters combined.
			</p>
			<h3 class="font-bold" id="proficiency">Proficiency</h3>
			<p>
				I am someone more on the curious side of things which leads me to experiment and try out new things that seems interesting to me which eventually 
				becomes part of my tech stack. Examples of languages that I've acquired from this curiosity are: <b>Rust</b>, <b>Javascript or Typescript</b>. 
				I'm also involved a bit with continous integration or continous development with <b>Github Actions</b> and devops such as <b>Docker Swarm</b> and 
				<b>Docker</b>. 
			</p>
			<p>
				My primary languages to use is <b>Kotlin</b> or <b>Java</b> with the databases or caches being <b>MongoDB</b> and <b>Redis</b>. Other than 
				those, you can find my entire tech stack and knowledgebase on my GitHub's README.
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
					icon="https://cdn.mihou.pw/Celestia.png"
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
