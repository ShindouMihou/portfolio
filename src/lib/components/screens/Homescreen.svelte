<script lang="ts">
    import {fade} from "svelte/transition"
    import {backgroundStyle, currentPage} from "$lib/states";

    function navigate(screen: string) {
        $currentPage = screen
        setTimeout(() => {
            $backgroundStyle = ''
        }, 150)
    }
</script>

<div class="bg-cover w-full min-h-screen pt-8" in:fade={{delay: 500}}>
    <div class="p-4 grid-cols-2 grid w-full">
        <div class="flex flex-col gap-2 w-fit group">
            <button on:click={() => navigate('homepage')} class="bg-blue-50 rounded-lg p-3 w-fit group-hover:scale-105 group-hover:opacity-90 transition ease-in-out duration-500">
                <h2 class="playfair text-xl">mi.</h2>
            </button>
        </div>
    </div>
</div>