<script>
	import '../app.postcss';
    import {onMount} from "svelte";

    let visibility = { content: false, loader: false }
    onMount(() => {
        setTimeout(() => {
            visibility = { content: false, loader: true }
            setTimeout(() => visibility = { content: true, loader: false}, 1024)
        }, 1024)
    })
</script>

<svelte:head>
    <title>shindou mihou</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Sofia+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
        .playfair { font-family: 'Playfair Display', sans-serif; }
        .sofia { font-family: 'Sofia Sans', sans-serif; }
    </style>
</svelte:head>

<style>
    .animate-loading {
        transform-style: preserve-3d;
        animation: animate-loading 1s;
    }

    @keyframes animate-loading {
        0% {
            transform: translate3d(0px, 200%, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0;
        }
        100% {
            transform: translate3d(0px, 0%, 3px) scale3d(1, 1, 1) rotate(0deg); transform-style: preserve-3d;
            opacity: 100;
        }
    }
</style>

{#if visibility.loader === true}
    <div id="loader" class="p-10 sofia w-full flex flex-col bg-black overflow-hidden overflow-y-hidden">
        <main class="w-full flex flex-grow text-white min-h-screen">
            <div class="md:my-auto md:px-6 py-24">
                <h1 class="text-lg playfair animate-loading">shindou mihou</h1>
                <h2 class="text-3xl md:text-7xl xl:text-9xl playfair tracking-widest leading-none font-bold md:font-black uppercase animate-loading">curious <br>and adventurous</h2>
            </div>
        </main>
    </div>
{:else if visibility.content === true}
    <div id="container" class="p-10 sofia w-full flex flex-col">
        <main class="w-full flex flex-grow bg-white min-h-screen">
            <slot />
        </main>
    </div>
{:else}
    <div class="p-10 sofia w-full flex flex-col bg-black overflow-hidden overflow-y-hidden">
        <main class="w-full flex flex-col flex-grow text-white min-h-screen">
            <h1 class="text-lg playfair animate-pulse text-right md:text-left">loading...</h1>
            <p class="text-sm md:hidden animate-pulse text-right md:text-left">best viewed on desktop</p>
        </main>
    </div>
{/if}