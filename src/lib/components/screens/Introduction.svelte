<script>
    import {Icon} from "@steeze-ui/svelte-icon";
    import {ChevronLeft, Flame, HeartPulse, Languages} from "@steeze-ui/lucide-icons";
    import {fade, slide} from "svelte/transition"
    import {currentPage} from "$lib/states";
    import Photo from "$lib/components/Photo.svelte";
    import Summary from "$lib/components/Summary.svelte";
    import Expandable from "$lib/components/Expandable.svelte";

    function back() {
        $currentPage = 'homepage'
    }
</script>

<div in:fade={{delay: 500}} out:fade>
    <div class="p-4">
        <button on:click={back} class="py-2 flex flex-row items-center gap-2 hover:opacity-40 transiton ease-in-out duration-500">
            <Icon src={ChevronLeft} size="16"/>
            <h2 class="playfair text-lg font-bold">introduction.</h2>
        </button>
        <div class="py-2 playfair text-sm">
            <p>
                hello. i'm <span class="font-bold">shindou mihou</span>,
                a self-proclaimed full-stack software engineer. i'm primarily a Golang-Kotlin developer with
                Svelte, Typescript to create the backends and frontends respectively.
            </p>
        </div>
    </div>
    <Expandable title="Summary">
        <div class="flex flex-col gap-2 py-4 bg-[#433C36] px-2 brown-crossed mx-1 border-l border-r border-t border-black" in:slide out:slide>
            <div class="grid gap-2 grid-cols-2">
                <Summary icon={Languages} title="Origin">
                    <p>Bohol, Philippines</p>
                </Summary>
                <Summary icon={HeartPulse} title="Age">
                    <p>19 years old</p>
                </Summary>
            </div>
            <Summary icon={Flame} title="Specialization">
                <p>Full-stack Development</p>
            </Summary>
        </div>
    </Expandable>
    <div class="p-4">
        <div class="flex flex-col gap-2 py-2 playfair text-sm">
            <p>
                i used to write web novels and i tend to read mangas, webtoons and
                comics as my past time.
            </p>
            <p>
                furthermore, i like to take photographs, mostly of cinematic
                scenes and have done event photography on behalf of my school.
            </p>
        </div>
    </div>
    <Expandable title="Photos" expanded={true}>
        <div class="flex flex-col gap-2 py-4 bg-[#433C36] px-2 brown-crossed mx-1 border-l border-r border-t border-black" in:slide out:slide>
            <Photo title="School Film: Tamper Cafe (unedited)"
                   src="https://portfolio-image-assets.mihou.pw/DSC_0123.JPG?width=1024"/>
            <Photo title="St. Joseph Cathedral (unedited)"
                   src="https://portfolio-image-assets.mihou.pw/316805976_2733107920152532_2156992432695573984_n.jpg?width=1024"/>
            <Photo title="St. Joseph Cathedral: Side View (unedited)"
                   src="https://portfolio-image-assets.mihou.pw/316663976_2733107783485879_2441954232901026412_n.jpg?width=1024"/>
            <Photo title="Heart (unedited)"
                   src="https://portfolio-image-assets.mihou.pw/316947913_2733108013485856_7825912904963328528_n.jpg?width=1024"/>
        </div>
    </Expandable>
</div>
