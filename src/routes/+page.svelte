<script>
    import PhoneMockup from "$lib/components/PhoneMockup.svelte";
    import {fade, slide, blur} from "svelte/transition"
    import {onMount} from "svelte";
    import {background, currentPage, splashscreen, text} from "$lib/states";
    import Introduction from "$lib/components/screens/Introduction.svelte";
    import Homepage from "$lib/components/screens/Homepage.svelte";
    import StatusBar from "$lib/components/StatusBar.svelte";
    import Works from "$lib/components/screens/Works.svelte";

    let show = false
    let frame = 0

    onMount(() => {
        setTimeout(() => { show = true}, 500)
        setTimeout(() => { $background = 'bg-white'; $text = 'text-black'; $splashscreen = false; }, 6_000)
        setTimeout(() => incrementFrame(), 800)
    })

    function incrementFrame() {
        if (frame > 4) return
        setTimeout(() => {
            frame++
            incrementFrame()
        }, frame === 2 ? 1_000 : frame === 3 ? 1_500 : frame === 4 ? 600 : 800)
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
        <div class="flex flex-col items-center pt-24 pb-12 {frame < 5 ? 'align-middle min-h-screen justify-center' : ''}">
            {#if frame === 0}
                <div in:slide={{ duration: 700 }} out:slide={{ duration: 300}}>
                    <h1 class="text-2xl playfair lowercase font-bold">i am me.</h1>
                </div>
            {:else if frame === 1}
                <div in:slide={{ duration: 700 }} out:slide={{ duration: 300}}>
                    <h1 class="text-2xl playfair lowercase font-bold">i am myself.</h1>
                </div>
            {:else if frame === 2}
                <div in:blur={{ duration: 700 }} out:slide={{ duration: 300}}>
                    <h1 class="text-2xl playfair lowercase glow font-bold">i am.</h1>
                </div>
            {:else if frame === 3}
                <div class="flex flex-col items-center" in:blur={{ duration: 700 }} out:blur={{ duration: 300}}>
                    <h1 class="text-2xl playfair lowercase glow font-bold">shindou mihou</h1>
                    <h2 class="text-sm leading-none playfair lowercase">a curious and adventurous student.</h2>
                </div>
            {:else if frame === 4}
            {:else if frame === 5}
                <div class="flex flex-col items-center" in:blur={{ duration: 700 }}>
                    <h1 class="text-2xl playfair lowercase glow font-bold">shindou mihou</h1>
                    <h2 class="text-sm leading-none playfair lowercase">a curious and adventurous student.</h2>
                </div>
            {/if}
        </div>
        <div in:blur={{ duration: 700, delay: 6_000 }} out:slide>
            <PhoneMockup padding="p-0">
                <div in:fade={{delay: 2_400}}>
                    <StatusBar/>
                    {#if $currentPage === "introduction"}
                        <Introduction/>
                    {:else if $currentPage === "homepage"}
                        <Homepage/>
                    {:else if $currentPage === 'works'}
                        <Works/>
                    {/if}
                </div>
            </PhoneMockup>
        </div>
    </div>
{/if}