<script  lang="ts">
    let href: string;
    let icon: string;
    let desc: string;
    let name: string;
    let discontinued: boolean = false
    export {
        href,
        icon,
        name,
        desc,
        discontinued
    }
</script>
<a href={href} rel="noreferrer" class="border-black border rounded py-0 animate-in fade-in-0 slide-in-from-left-1 duration-1000 delay-75 ease-in-out relative w-full group select-none" target="_blank">
    <div class="opacity-0 w-full bg-[rgba(0,0,0,0.7)] h-full top-0 left-0 absolute group-hover:opacity-100 duration-500">
        <div class="absolute top-[50%] text-white left-0 text-center w-full translate-y-[-50%] px-2">
            <p class="font-bold">{name}</p>
            <p class="text-gray-300 text-sm font-light">{desc}</p>
            {#if discontinued}
                <p class="text-red-400 text-xs font-light py-1">Discontinued</p>
            {/if}
        </div>
    </div>
    <img src={icon} class="bg-gray-600 w-full object-cover h-full" alt={name}>
</a>