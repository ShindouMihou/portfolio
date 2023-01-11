<script lang="ts">
    import {Icon} from "@steeze-ui/svelte-icon";
    import {ArrowLeft} from "@steeze-ui/radix-icons";
    import {screenPage} from "../../stores.js";
    import {onMount} from "svelte";
    import Works from "$lib/components/Works.svelte";

    onMount(() => {
        setTimeout(() => document.getElementById('head')?.scroll(), 500)
    })
</script>
<style>
    .animate-entrance-to-left {
        transform-style: preserve-3d;
        animation: animate-entrance-text-to-left 0.8s;
    }

    @keyframes animate-entrance-text-to-left {
        0% {
            transform: translate3d(0px, 200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, -20deg);
            opacity: 100%
        }
        100% {
            transform: translate3d(0px, 0%, 3px) scale3d(1, 1, 1) rotate(0deg) skew(0deg); transform-style: preserve-3d;
            opacity: 100%;
        }
    }
</style>
<div class="w-full scroll-smooth" id="box">
    <div class="px-8 py-4 min-h-screen my-auto animate-entrance-to-left">
        <button on:click={() => $screenPage = 'home'}  class="flex flex-row gap-2 items-center pb-8">
            <Icon src={ArrowLeft} size="20px"></Icon>
            <p class="text-lg playfair tracking-widest font-light uppercase">go back</p>
        </button>
        <h1 class="text-3xl md:text-9xl playfair tracking-widest leading-none font-bold md:font-black uppercase" id="head">my works</h1>
        <div class="pt-2 limit-width w-full flex flex-col md:grid md:grid-cols-4 gap-2 md:gap-4 limit-x animate-in fade-in slide-in-from-top-1 ease-in-out duration-1000">
            <Works/>
        </div>
    </div>
</div>