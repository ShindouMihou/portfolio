<script>
    let href;
    let mobileIcon = null;
    let icon;
    let desc;
    let name;

    export {
        href,
        icon,
        name,
        desc,
        mobileIcon
    }
</script>
<a href={href} class="animate-in fade-in-0 slide-in-from-left-1 duration-1000 delay-75 ease-in-out relative w-full group select-none" rel="external" target="_blank">
    <div class="opacity-0 w-full bg-[rgba(0,0,0,0.7)] h-full top-0 left-0 absolute group-hover:opacity-100 duration-500">
        <div class="absolute top-[50%] text-white left-0 text-center w-full translate-y-[-50%]">
            <p class="font-bold">{name}</p>
            <p class="text-gray-300 text-sm font-light">{desc}</p>
        </div>
    </div>
    {#if !mobileIcon}
        <img src={icon} class="bg-gray-600 w-full object-contain" alt={name}>
    {:else}
        <img src={icon} class="hidden md:block bg-gray-600 w-full object-contain" alt={name}>
        <img src={mobileIcon} class="md:hidden bg-gray-600 w-full object-contain" alt={name}>
    {/if}
    <div class="xl:hidden py-2 text-center">
        <p class="font-bold text-sm text-gray-600">{name}</p>
        <p class="font-light text-xs text-gray-600">{desc}</p>
    </div>
</a>