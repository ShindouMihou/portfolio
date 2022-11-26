<script>
import Work from "$lib/components/work.svelte";

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

<svelte:head>
	<link rel="preload" as="image" href="https://user-images.githubusercontent.com/69381903/174571665-ff3fc2b2-93b0-4bb5-92bc-bc5cb267a860.png"/>
	<link rel="preload" as="image" href="https://cdn.discordapp.com/avatars/983449886567583744/ddaaa9e3ef8cfc724ba42c44cc54b265.png?size=512"/>
	<link rel="preload" as="image" href="https://cdn.discordapp.com/avatars/741288788164345856/a2f5f56f15b4f302426b63fe4f9f4c34.png?size=512"/>
	<link rel="preload" as="image" href="https://media.discordapp.net/avatars/786464598835986483/8175d0e1793e99b786032be669537a4c.png?size=512"/>
	<link rel="preload" as="image" href="https://cdn.mihou.pw/Celestia.png"/>
	<link rel="preload" as="image" href="https://cdn.mihou.pw/Flora.png"/>
	<link rel="preload" as="image" href="https://media.discordapp.net/avatars/515067662028636170/47e5abaedee90b70a37826ee3d7435e6.png?size=512"/>
	<link rel="preload" as="image" href="https://exponie.me/favicon.png"/>
</svelte:head>

<div class="py-6 limit-width w-full limit-x animate-in fade-in slide-in-from-top-3 ease-in-out duration-1000">
	<h1 class="text-5xl font-bold lowercase leading-0">Mihou</h1>
	<div class="text-2xl flex flex-col font-light">
		<p>{age("2004 12 22")} years old from Bohol, Philippines. Full-stack developer.</p>
		<p></p>
	</div>
	<div class="text-lg font-light pt-4 gap-4 flex flex-col text-justify md:text-left w-full text-gray-700">
		<p class="break-words">
			I'm a high school student who knows front-end and back-end development, devops, database management, server management 
			and many other fields in the industry with some knowledge in design and other related fields. I am fairly adaptable and 
			willing to try out new technologies.
		</p>
		<p class="break-words">
			Kotlin and Java, Javascript and Typescript are my primary languages with experiences in GitHub Actions, Docker 
			and Docker Swarm for devops, MongoDB and Redis for databases and a good amount of knowledge with using AWS as a cloud 
			provider, Cloudflare-related technologies such as Cloudflare Worker, KV, etc. and many more.
		</p>
	</div>
</div>

<div class="pl-12 xl:pl-44 pt-6 animate-in fade-in slide-in-from-top-1 ease-in-out duration-1000">
	<div class="w-full border-b border-b-gray-600">
		<p>Works</p>
	</div>
</div>
<div class="pt-2 limit-width w-full flex flex-col md:grid md:grid-cols-4 gap-2 md:gap-4 limit-x animate-in fade-in slide-in-from-top-1 ease-in-out duration-1000">
	<Work 
		icon="https://media.discordapp.net/avatars/786464598835986483/8175d0e1793e99b786032be669537a4c.png?size=512"
		href="https://github.com/ManaNet/Amelia" 
		name="Amelia" 
		desc="Discord Bot, Creator"
	></Work>
	<Work 
		icon="https://cdn.mihou.pw/Flora.png"
		href="https://github.com/ShindouMihou/Flora" 
		name="Flora" 
		desc="Blogging, Creator"
	></Work>
	<Work 
		icon="https://exponie.me/favicon.png"
		href="https://exponie.me/" 
		name="Exponentia" 
		desc="Spelling Game, Creator"
	></Work>
	<Work 
		icon="https://media.discordapp.net/attachments/802880444877766697/1009585020727480371/Rubber_Duck_in_White.png"
		href="https://rubberduck.mihou.pw" 
		name="My Rubber Duck" 
		desc="Rubber Duck, Creator"
	></Work>
	<Work 
		icon="https://media.discordapp.net/avatars/515067662028636170/47e5abaedee90b70a37826ee3d7435e6.png?size=512"
		href="https://beemo.gg" 
		name="Beemo" 
		desc="Discord Bot, Co-Developer"
	></Work>
</div>
