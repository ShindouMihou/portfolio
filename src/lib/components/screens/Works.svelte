<script lang="ts">
    import {Armchair, ChevronLeft, Home} from "@steeze-ui/lucide-icons";
    import {Icon} from "@steeze-ui/svelte-icon";
    import {fade, slide} from "svelte/transition"
    import {currentPage} from "$lib/states";
    import Work from "$lib/components/Work.svelte";
    import Expandable from "$lib/components/Expandable.svelte";
    import {Github} from "@steeze-ui/simple-icons";

    function back() {
        $currentPage = 'homepage'
    }
</script>

<div in:fade={{delay: 500}} out:fade>
    <div class="p-4">
        <button on:click={back} class="py-2 flex flex-row items-center gap-2 hover:opacity-40 transiton ease-in-out duration-500">
            <Icon src={ChevronLeft} size="16"/>
            <h2 class="playfair text-lg font-bold">works.</h2>
        </button>
        <div class="pb-4 playfair text-sm">
            <p>
                these are a subset of all the projects that i've worked on. if you want the full list, i recommend
                looking into my
                <a href="https://github.com/ShindouMihou" rel="external" target="_blank" class="inline-block no-underline text-black font-bold"><Icon src={Github} size="16"/></a> instead.
            </p>
        </div>
    </div>
    <Expandable title="Works" expanded={true}>
        <div class="flex flex-col gap-2 bg-[#464646] p-4">
            <div class="grid grid-cols-2 gap-2">
                <Work
                        icon="https://portfolio-image-assets.mihou.pw/Nexus_512_512_px.png"
                        href="https://github.com/ShindouMihou/Nexus"
                        name="Nexus"
                        desc="Discord Bot Framework, Creator"
                ></Work>
                <Work
                        icon="https://portfolio-image-assets.mihou.pw/splash.png?size=512"
                        href="https://github.com/ShindouMihou/notie"
                        name="Notie"
                        desc="Mobile App, Creator"
                ></Work>
                <Work
                        icon="https://portfolio-image-assets.mihou.pw/threadscore.png?size=512"
                        href="https://threadscore.mihou.pw"
                        name="Threadscore"
                        desc="Discord Bot, Creator"
                ></Work>
                <Work
                        icon="https://portfolio-image-assets.mihou.pw/primrose.png?size=512"
                        href="https://github.com/ShindouMihou/primrose"
                        name="Primrose"
                        desc="Blogging Platform, Creator"
                ></Work>
                <Work
                        icon="https://portfolio-image-assets.mihou.pw/burp.png"
                        href="https://github.com/ShindouMihou/burp"
                        name="Burp"
                        desc="Deployment Tool, Creator"
                ></Work>
                <Work
                        icon="https://media.discordapp.net/avatars/786464598835986483/8175d0e1793e99b786032be669537a4c.png?size=512"
                        href="https://github.com/Amelia-chan/Amelia"
                        name="Amelia"
                        desc="Discord Bot, Creator"
                ></Work>
                <Work
                        icon="https://avatars.githubusercontent.com/u/122293977?s=1024&v=4"
                        href="https://github.com/Ketshap/ketshap"
                        name="Ketshap"
                        desc="Discord Bot, Creator"
                ></Work>
                <Work
                        icon="https://exponie.mihou.pw/favicon.png"
                        href="https://exponie.mihou.pw/"
                        name="Exponentia"
                        desc="Spelling Game, Creator"
                ></Work>
                <Work
                        icon="https://portfolio-image-assets.mihou.pw/Screenshot_2023-08-26_073658_upscayl_4x_realesrgan-x4plus-anime1.png?size=512"
                        href="https://github.com/ShindouMihou/guarde"
                        name="Guarde"
                        desc="Reverse Proxy, Creator"
                ></Work>
                <Work
                        icon="https://exponie.mihou.pw/favicon.png"
                        href="https://github.com/ShindouMihou/exponie-desktop"
                        name="Exponentia (Desktop)"
                        desc="Spellling Game, Creator"
                ></Work>
                <Work
                        icon="https://portfolio-image-assets.mihou.pw/Rubber_Duck_in_White.png"
                        href="https://rubberduck.mihou.pw"
                        name="My Rubber Duck"
                        desc="Rubber Duck, Creator"
                ></Work>
                <Work
                        icon="https://portfolio-image-assets.mihou.pw/47e5abaedee90b70a37826ee3d7435e6.png?size=512"
                        href="https://beemo.gg"
                        name="Beemo"
                        desc="Discord Bot, Co-Developer"
                ></Work>
                <Work
                        icon="https://portfolio-image-assets.mihou.pw/ddaaa9e3ef8cfc724ba42c44cc54b265.png?size=512"
                        href="https://irina.pages.dev"
                        name="Bellus"
                        desc="Discord Bot, Creator"
                        discontinued={true}
                ></Work>
                <Work
                        icon="https://portfolio-image-assets.mihou.pw/a2f5f56f15b4f302426b63fe4f9f4c34.png?size=512"
                        href="https://github.com/ManaNet"
                        name="Mana"
                        desc="Discord Bot, Creator"
                        discontinued={true}
                ></Work>
                <Work
                        icon="https://cdn.mihou.pw/Flora.png"
                        href="https://github.com/ShindouMihou/Flora"
                        name="Flora"
                        desc="Blogging, Creator"
                        discontinued={true}
                ></Work>
                <Work
                        icon="https://cdn.mihou.pw/Celestia.png"
                        href="https://github.com/ShindouMihou/Celestia"
                        name="Celestia"
                        desc="Logging, Creator"
                        discontinued={true}
                ></Work>
            </div>
        </div>
    </Expandable>
</div>
