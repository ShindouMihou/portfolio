<script lang="ts">
    import {Armchair, BookOpen, Home, Milestone, Newspaper} from "@steeze-ui/lucide-icons";
    import {Icon} from "@steeze-ui/svelte-icon";
    import {fade, slide} from "svelte/transition"
    import {currentPage} from "$lib/states";
    import {Github} from "@steeze-ui/simple-icons";

    function navigate(screen: string) {
        $currentPage = screen
    }
</script>

<div in:fade={{delay: 500}} out:fade>
    <div class="p-4">
        <div class="py-2 flex flex-row items-center gap-2">
            <Icon src={Home} size="16"/>
            <h2 class="playfair text-lg font-bold">homepage.</h2>
        </div>
        <div class="pb-4 playfair text-sm">
            <p>
                simply click through any of the ones below to figure out some things about me.
            </p>
        </div>
        <div class="flex flex-col gap-2">
            <div class="grid grid-cols-2 gap-2">
                <button on:click={() => navigate('introduction')} class="rounded inter h-28 bg-gray-50 border flex flex-col p-2 py-4 hover:opacity-60 transition ease-in-out duration-500 justify-between border-[#1a1a1a]">
                    <Icon src={Armchair} size="26"/>
                    <div class="pt-4">
                        <h2 class="font-bold text-left">Introduction</h2>
                    </div>
                </button>
                <button on:click={() => navigate('works')} class="rounded inter h-28 bg-gray-50 border flex flex-col p-2 py-4 hover:opacity-60 transition ease-in-out duration-500 justify-between border-[#1a1a1a]">
                    <Icon src={Milestone} size="26"/>
                    <div class="pt-4">
                        <h2 class="font-bold text-left">Works</h2>
                    </div>
                </button>
                <a href="https://github.com/ShindouMihou" rel="external" target="_blank" class="rounded inter h-28 bg-gray-50 border flex flex-col p-2 py-4 hover:opacity-60 transition ease-in-out duration-500 justify-between border-[#1a1a1a]">
                    <Icon src={Github} size="26"/>
                    <div class="pt-4">
                        <h2 class="font-bold text-left">GitHub</h2>
                    </div>
                </a>
                <a href="https://blog.mihou.pw" rel="external" target="_blank" class="rounded inter h-28 bg-gray-50 border flex flex-col p-2 py-4 hover:opacity-60 transition ease-in-out duration-500 justify-between border-[#1a1a1a]">
                    <Icon src={Newspaper} size="26"/>
                    <div class="pt-4">
                        <h2 class="font-bold text-left">Blog</h2>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>