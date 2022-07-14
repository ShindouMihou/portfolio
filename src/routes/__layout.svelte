<script lang="ts">
    import Github from '$lib/components/github.svelte';
    import Newspaper from '$lib/components/newspaper.svelte';
    import Discord from '$lib/components/discord.svelte';
    import '../app.css';
    import { onMount } from 'svelte';

    onMount(() => {
    const loader = document.querySelector('#loader')!
    const container = document.querySelector('#animate__Me')!
    loader.classList.add('animate-out', 'fade-out', 'repeat-1', 'duration-1000')

    setTimeout(() => {
      loader.classList.add('hidden')
      container.classList.remove('hidden')
      container.classList.add('animate-in', 'fade-in', 'repeat-1', 'duration-1000')
    }, 500)
  });
</script>


<svelte:head>
    <link rel="preload" as="image" href="https://bellus.quest/bellus.min.png"/>
</svelte:head>
<div id="loader" class="h-screen w-screen m-auto p-12 align-middle justify-center flex flex-row items-center">
    <img src="https://bellus.quest/bellus.min.png" class="animate__animated h-16 w-16 flex-shrink-0 animate-bounce" alt="Bellus"/>
  </div>
<div class="hidden min-h-screen flex flex-col" id="animate__Me">
    <main class="rubik bg-white pt-6 pb-12 flex flex-col flex-grow max-width">
        <slot></slot>
    </main>
    <div class="bg-gray-100 w-full limit-x mt-12 m-auto animate-in fade-in slide-in-from-top-1 ease-in-out duration-1000">
        <footer class="max-width">
            <div class="py-6 w-full">
                <h1 class="text-5xl font-bold lowercase leading-0">Mihou</h1>
                <div class="text-lg flex flex-col font-light">
                    <p>develop, design and deploy.</p>
                    <p></p>
                </div>
                <div class="text-sm font-light pt-4 text-justify w-full text-gray-700">
                    <p class="break-words">
                        This website is not for use by other than Shindou Mihou, any unlawful copies and modifications will be taken down 
                        through DMCAs, etc.
                    </p>
                    <p>You may use the source code of the website for references only.</p>
                </div>
                <div class="flex flex-row flex-wrap gap-4 pt-5">
                    <a href="https://github.com/ShindouMihou" class="hover-opacity" rel="external" target="_blank" alt="GitHub">
                        <Github class="h-6 w-6"></Github>
                    </a>
                    <a href="https://discord.gg/Gy2vKkJjET" class="hover-opacity" rel="external" target="_blank" alt="Discord">
                        <Discord class="h-6 w-6"></Discord>
                    </a>
                    <a href="https:/blog.mihou.pw" class="hover-opacity" rel="external" target="_blank" alt="Blog">
                        <Newspaper class="h-6 w-6"></Newspaper>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</div>
