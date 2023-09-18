<script lang="ts">
    import { blur, fade } from "svelte/transition"
    import {backgroundStyle, currentPage, homescreenBackgroundStyle} from "$lib/states";
    export let background = "bg-white"
    export let padding = "p-4"

    let status = false
    export let turnOn: boolean = false
    $: {
        if (turnOn) {
            switchOnOff()
        }
    }

    function switchOnOff() {
        status = !status
        if (status) {
            animationFrame = 0
            incrementFrame()
        } else {
            goHome()
        }
    }

    let animationFrame = 0

    function incrementFrame() {
        if (animationFrame > 0) return
        setTimeout(() => {
            animationFrame++
            incrementFrame()
        }, 2_500)
    }

    function goHome() {
        $currentPage = 'homescreen'
        setTimeout(() => {
            $backgroundStyle = homescreenBackgroundStyle
        }, 500)
    }

</script>
<style>
    .mockup-contents::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
    .mockup-contents {
        scrollbar-width: none;
    }
    .glow {
        text-shadow:
                0 0 7px #fff,
                0 0 16px #fff,
                0 0 32px #fff,
                0 0 42px #fff;
    }

</style>
<div class="relative mx-auto max-h-[580px] 2xl:max-h-full border-black bg-black border-[14px] rounded-[2.5rem] rounded-b-none 2xl:rounded-b-[2.5rem] h-[600px] w-[300px]">
    <button on:click={goHome} class="h-[32px] w-[3px] bg-black absolute -left-[17px] top-[72px] rounded-l-lg"></button>
    <div class="h-[46px] w-[3px] bg-black absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div class="h-[46px] w-[3px] bg-black absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <button on:click={switchOnOff} class="h-[64px] w-[3px] bg-black absolute -right-[17px] top-[142px] rounded-r-lg"></button>
    <div style={$backgroundStyle} class="bg-cover mockup-contents rounded-[2rem] rounded-b-none 2xl:rounded-b-[2rem] overflow-x-hidden overflow-y-scroll w-[272px] h-[572px] max-h-[567px] 2xl:max-h-full {background} {padding}">
        {#if status}
            {#if animationFrame === 0}
                <div class="h-full w-full bg-black">
                    <div class="flex flex-col items-center align-middle h-full justify-center" >
                        <h1 class="text-lg playfair lowercase glow font-bold text-white"
                            in:blur={{ delay: 150, duration: 300 }}
                            out:fade={{ duration: 300}}>luna.</h1>
                    </div>
                </div>
            {:else if animationFrame === 1}
                <slot/>
            {/if}
        {:else}
            <div class="h-full w-full bg-black"/>
        {/if}
    </div>
</div>