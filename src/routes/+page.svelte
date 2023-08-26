<script lang="ts">
    import { Parallax, ParallaxLayer } from 'svelte-parallax';
    import SectionOne from "$lib/components/SectionOne.svelte";
    import Story from "$lib/screens/Story.svelte";
    import {screenPage} from "../stores.js";
    import {ArrowDown, ArrowUp } from "@steeze-ui/radix-icons";
    import {Icon} from "@steeze-ui/svelte-icon";
    import WorksScreen from "$lib/screens/WorksScreen.svelte";

    let parallaxOpacities = []
    function changeParallaxOpacity(index: number, progress: number) {
        parallaxOpacities[index] = 100*(1-(progress - 0.5))
        parallaxOpacities = parallaxOpacities
    }

    let parallax
</script>

{#if $screenPage === 'home'}
    <div class="w-full" id="box">
        <Parallax sections={3} bind:this={parallax}>
            <ParallaxLayer class="flex flex-col" offset={0} onProgress="{(progress) => changeParallaxOpacity(0, progress)}" rate={0.3}>
                <div class="md:my-auto md:px-6 py-24" style="opacity: {parallaxOpacities[0]}%">
                    <SectionOne parallax={parallax}></SectionOne>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} onProgress="{(progress) => changeParallaxOpacity(1, progress)}">
                <div class="px-8 py-4 min-h-screen my-auto" style="opacity: {parallaxOpacities[1]}%">
                    <h2 class="text-lg playfair tracking-widest font-light pb-4">
                        hello, i am shindou mihou!
                    </h2>
                    <p class="font-light">
                        I'm a self-proclaimed full-stack developer with a specific love for backend development from Bohol, Philippines.
                        I'm currently primarily a Golang-Kotlin developer with Typescript, Svelte to create backends and frontends respectively.
                        I plan to participate more in local meetups from where I am, so if you find me out there, feel free to hit me up!
                    </p>
                    <h3 class="text-lg playfair tracking-widest font-light py-4">
                        about me
                    </h3>
                    <ul class="list-disc pl-8 font-light">
                        <li>
                            i'm eighteen years old at the time of writing, and am currently attending a local high school.
                        </li>
                        <li>
                            i used to, and maybe still, write web novels and mangas, webtoons and comics are the epitome of me.
                        </li>
                        <li>
                            i'm a photographer who also loves to make cinematography and creating minimalistic graphics tends to be my hobby.
                        </li>
                        <li>
                            i have a deep curiosity for anything that excites me, that's how i got into all my hobbies and even programming.
                        </li>
                    </ul>
                    <div class="flex flex-row gap-2 items-center animate-entrance-from-center delay-1000 py-8">
                        <Icon src={ArrowDown} size="20px"></Icon>
                        <p class="text-xs playfair opacity-60">scroll or click to get to: </p>
                        <button on:click={() => parallax.scrollTo(3)}>
                            <p class="text-xs playfair hover:-skew-x-6 hover:scale-110 hover:opacity-100 duration-500 ease-in-out opacity-60">menu</p>
                        </button>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} onProgress="{(progress) => changeParallaxOpacity(2, progress)}">
                <div class="px-8 py-4 min-h-screen my-auto" style="opacity: {parallaxOpacities[2]}%">
                    <button on:click={() => { $screenPage = 'story'; parallax.scrollTo(0)}}
                            class="text-3xl md:text-9xl playfair leading-none font-bold md:font-black uppercase
                        hover:skew-x-6 opacity-60 hover:opacity-100 ease-in-out duration-500 hover:scale-110">timeline</button>
                    <button on:click={() => { $screenPage = 'works'; parallax.scrollTo(0)}}
                            class="text-3xl md:text-9xl playfair leading-none font-bold md:font-black uppercase
                        hover:skew-x-6 opacity-60 hover:opacity-100 ease-in-out duration-500 hover:scale-110">works</button>
                    <div class="flex flex-row flex-wrap gap-2">
                        <a href="https://github.com/ShindouMihou"
                           class="text-3xl md:text-9xl playfair tracking-widest leading-none font-bold md:font-black uppercase
                        hover:skew-x-6 opacity-60 hover:opacity-100 ease-in-out duration-500 hover:scale-110" target="_blank" rel="noreferrer">github</a>
                        <a href="https://blog.mihou.pw"
                           class="text-3xl md:text-9xl playfair tracking-widest leading-none font-bold md:font-black uppercase
                        hover:skew-x-6 opacity-60 hover:opacity-100 ease-in-out duration-500 hover:scale-110" target="_blank" rel="noreferrer">blog</a>
                        <a href="mailto:hello@mihou.pw"
                           class="text-3xl md:text-9xl playfair tracking-widest leading-none font-bold md:font-black uppercase
                        hover:-skew-x-6 opacity-60 hover:opacity-100 ease-in-out duration-500 hover:scale-110" target="_blank" rel="noreferrer">email</a>
                    </div>
                    <div class="flex flex-row gap-2 items-center animate-entrance-from-center delay-1000 pt-8">
                        <Icon src={ArrowUp} size="20px"></Icon>
                        <p class="text-xs playfair opacity-60">scroll up : </p>
                        <button on:click={() => parallax.scrollTo(2)}>
                            <p class="text-xs playfair hover:skew-x-6 hover:scale-110 hover:opacity-100 duration-500 ease-in-out opacity-60">introduction</p>
                        </button>
                        <button on:click={() => parallax.scrollTo(1)}>
                            <p class="text-xs playfair hover:-skew-x-6 hover:scale-110 hover:opacity-100 duration-500 ease-in-out opacity-60">start</p>
                        </button>
                    </div>
                </div>
            </ParallaxLayer>
        </Parallax>
    </div>
{:else if $screenPage === 'story'}
    <Story/>
{:else if $screenPage === 'works'}
    <WorksScreen/>
{/if}
