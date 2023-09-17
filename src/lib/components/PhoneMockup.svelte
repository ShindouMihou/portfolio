<script lang="ts">
    export let background = "bg-white"
    export let padding = "p-4"
</script>
<style>
    .mockup-contents::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
    .mockup-contents {
        scrollbar-width: none;
    }
</style>
<div class="relative mx-auto max-h-[580px] 2xl:max-h-full border-black bg-black border-[14px] rounded-[2.5rem] rounded-b-none 2xl:rounded-b-[2.5rem] h-[600px] w-[300px]">
    <div class="h-[32px] w-[3px] bg-black absolute -left-[17px] top-[72px] rounded-l-lg"></div>
    <div class="h-[46px] w-[3px] bg-black absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div class="h-[46px] w-[3px] bg-black absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div class="h-[64px] w-[3px] bg-black absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div class="mockup-contents rounded-[2rem] rounded-b-none 2xl:rounded-b-[2rem] overflow-x-hidden overflow-y-scroll w-[272px] h-[572px] max-h-[567px] 2xl:max-h-full {background} {padding}">
        <slot/>
    </div>
</div>