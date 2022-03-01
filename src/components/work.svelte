<script>
    let href;
    let icon;
    let desc;
    let name;

    export {
        href,
        icon,
        desc,
        name
    }
</script>
<a 
    rel="external" 
    href="{href}" 
    class="no-underline rounded-sm from-gray-700 to-gray-800 bg-gradient-to-br hover:opacity-80 duration-500 flex flex-row items-center gap-4 w-72 flex-grow"
>
    <img 
        class="h-[4.2rem] w-[4.2rem] shadow-lg m-0"
        src="{icon}" 
        alt="{name}"
    />
    <div class="flex flex-col m-0 pb-2">
        <h4 class="m-0 leading-none">{name}</h4>
        <p class="m-0 leading-none font-light">{desc}</p>
    </div>
</a>