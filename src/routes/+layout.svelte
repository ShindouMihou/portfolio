<script>
  import "../app.postcss";
  import {background, currentPage, currentTitle, splashscreen, text} from "$lib/states";
</script>

<svelte:head>
    <title>{$currentTitle + ": " + $currentPage.charAt(0).toUpperCase() + $currentPage.slice(1)}</title>
</svelte:head>

<div class="{$background} {$text} transition ease-in-out duration-500 w-screen {$splashscreen ? 'h-screen max-h-screen overflow-hidden' : 'min-h-screen'}">
    <slot/>
</div>