<script lang="ts">
    export let title: string
    export let src: string
</script>
<div>
    <img class="rounded shadow border-black border" alt={title} src={src}/>
    <div class="py-2 px-2 bg-white border-black border border-t-0">
        <h2 class="font-bold text-xs">{title}</h2>
    </div>
</div>