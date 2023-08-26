<script>
    import {ArrowDown} from "@steeze-ui/radix-icons";
    import {Icon} from "@steeze-ui/svelte-icon";
    export let parallax;
</script>

<style>
    .animate-entrance-to-right {
        transform-style: preserve-3d;
        animation: animate-entrance-text-to-right 0.8s;
    }

    .animate-entrance-to-left {
        transform-style: preserve-3d;
        animation: animate-entrance-text-to-left 0.8s;
    }

    .animate-entrance-from-center {
        transform-style: preserve-3d;
        animation: animate-entrance-text-from-center 0.8s;
    }

    @keyframes animate-entrance-text-to-right {
        0% {
            transform: translate3d(0px, 200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 20deg);
            opacity: 100%
        }
        100% {
            transform: translate3d(0px, 0%, 3px) scale3d(1, 1, 1) rotate(0deg) skew(0deg); transform-style: preserve-3d;
            opacity: 100%;
        }
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

    @keyframes animate-entrance-text-from-center {
        0% {
            transform: translate3d(0px, 200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, -5deg);
            opacity: 100%
        }
        100% {
            transform: translate3d(0px, 0%, 3px) scale3d(1, 1, 1) rotate(0deg) skew(0deg); transform-style: preserve-3d;
            opacity: 100%;
        }
    }
</style>


<h1 class="text-lg playfair animate-entrance-to-left">shindou mihou</h1>
<h2 class="text-3xl md:text-7xl xl:text-9xl playfair tracking-widest leading-none font-bold md:font-black uppercase animate-entrance-to-right">curious <br>and adventurous</h2>
<h3 class="text-lg playfair tracking-widest font-light animate-entrance-from-center">
    learning is a journey, not a destination. it takes passion, patience, and a willingness to step outside of your comfort zone.
</h3>
<div class="flex flex-row gap-2 items-centered animate-entrance-from-center delay-1000 py-8">
    <Icon src={ArrowDown} size="20px"></Icon>
    <p class="text-xs playfair opacity-60">scroll or select from either: </p>
    <div class="flex flex-row gap-2 pb-2 items-centered">
        <button on:click={() => parallax.scrollTo(2)}>
            <p class="text-xs playfair hover:skew-x-6 hover:scale-110 hover:opacity-100 duration-500 ease-in-out opacity-60">introduction</p>
        </button>
        <button on:click={() => parallax.scrollTo(3)}>
            <p class="text-xs playfair hover:-skew-x-6 hover:scale-110 hover:opacity-100 duration-500 ease-in-out opacity-60">menu</p>
        </button>
    </div>
</div>
