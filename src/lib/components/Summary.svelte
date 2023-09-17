<script lang="ts">
    import type {IconSource} from "@steeze-ui/lucide-icons";
    import {Icon} from "@steeze-ui/svelte-icon";
    export let icon: IconSource
    export let title: string
</script>
<div class="rounded inter p-3 h-28 bg-gray-50 border border-[#1a1a1a]">
    <div class="flex flex-row gap-2 items-center pb-2">
        <Icon src={icon} size="16" class="flex-shrink-0"/>
        <h2 class="font-bold text-sm">{title}</h2>
    </div>
    <slot/>
</div>