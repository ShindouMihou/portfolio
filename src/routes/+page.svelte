<script>
    import PhoneMockup from "$lib/components/PhoneMockup.svelte";
    import {fade, slide, blur, scale} from "svelte/transition"
    import {onMount} from "svelte";
    import {background, currentPage, splashscreen, text} from "$lib/states";
    import Introduction from "$lib/components/screens/Introduction.svelte";
    import Homepage from "$lib/components/screens/Homepage.svelte";
    import StatusBar from "$lib/components/StatusBar.svelte";
    import Works from "$lib/components/screens/Works.svelte";
    import Homescreen from "$lib/components/screens/Homescreen.svelte";

    let show = false
    let frame = 0

    let turnOnPhone = false

    onMount(() => {
        setTimeout(() => { show = true}, 500)
        setTimeout(() => { $background = 'bg-white'; $text = 'text-black'; $splashscreen = false; turnOnPhone = true; }, 1_500)
        setTimeout(() => incrementFrame(), 800)
    })

    function incrementFrame() {
        if (frame > 1) return
        setTimeout(() => {
            frame++
            incrementFrame()
        }, 1_500)
    }
</script>

<style>
    .glow {
        text-shadow:
                0 0 7px #fff,
                0 0 16px #fff,
                0 0 32px #fff,
                0 0 42px #fff;
    }
</style>
{#if show}
    <div class="w-screen">
        <div class="flex flex-col items-center pt-6 md:pt-24 pb-12 {frame < 2 ? 'align-middle min-h-screen justify-center' : ''}">
            {#if frame === 0}
                <div class="flex flex-col items-center" in:blur={{ delay: 300, duration: 700 }} out:blur={{ duration: 300}}>
                    <h1 class="text-2xl playfair lowercase glow font-bold">shindou mihou</h1>
                    <h2 class="text-sm leading-none playfair lowercase">a curious and adventurous student.</h2>
                </div>
            {/if}
        </div>
        <div in:blur={{ duration: 700, delay: 2_000 }} out:slide>
            <PhoneMockup padding="p-0" bind:turnOn={turnOnPhone}>
                <div in:fade={{delay: 400}}>
                    <StatusBar/>
                    {#if $currentPage === "introduction"}
                        <Introduction/>
                    {:else if $currentPage === "homepage"}
                        <Homepage/>
                    {:else if $currentPage === 'works'}
                        <Works/>
                    {:else if $currentPage === 'homescreen'}
                        <Homescreen/>
                    {/if}
                </div>
            </PhoneMockup>
        </div>
    </div>
{/if}
