<script lang="ts">
    import {Minus, Plus} from "@steeze-ui/lucide-icons";
    import {Icon} from "@steeze-ui/svelte-icon";
    import {slide} from "svelte/transition"

    export let expanded: boolean = false
    export let title: string
    function expand() {
        expanded = !expanded
    }
</script>
<div class="border-t border-b border-black">
    <div class="bg-white p-3 {expanded ? 'border-b border-black' : ''}">
        <button class="flex flex-row gap-2 items-center hover:opacity-60 transition ease-in-out duration-500" on:click={expand}>
            <div>
                {#if expanded}
                    <div in:slide out:slide>
                        <Icon src={Minus} size="16"/>
                    </div>
                {:else}
                    <div in:slide out:slide>
                        <Icon src={Plus} size="16"/>
                    </div>
                {/if}
            </div>
            <h2 class="font-bold text-sm">{title}</h2>
        </button>
    </div>
    {#if expanded}
        <slot/>
    {/if}
</div>