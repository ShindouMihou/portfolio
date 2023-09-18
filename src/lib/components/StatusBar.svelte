<script>
    import {BatteryFull, CellSignalHigh, CellSignalX, WifiHigh, WifiX} from "@steeze-ui/phosphor-icons";
    import {Icon} from "@steeze-ui/svelte-icon";
    import {onMount} from "svelte";
    let time = new Date();

    $: hours = time.getHours();
    $: minutes = time.getMinutes();
    $: suffix = hours < 12 ? 'AM' : 'PM'

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        })

        return () => {
            clearInterval(interval)
        }
    })
</script>
<div class="pt-4 px-6 flex flex-row justify-between font-bold select-none">
    <div class="flex flex-row gap-1 flex-shrink-0">
        <Icon src={window?.navigator?.onLine ? CellSignalHigh : CellSignalX} theme="duotone" size="16"/>
        <Icon src={window?.navigator?.onLine ? WifiHigh : WifiX} theme="duotone" size="16"/>
    </div>
    <div>
        <p class="text-xs">{hours}:{minutes} {suffix}</p>
    </div>
    <div class="flex flex-row gap-1 flex-shrink-0">
        <p class="text-xs">{100 - ((hours > 12 ? (hours - 12) : hours) * 8)}%</p>
        <Icon src={BatteryFull} theme="fill" size="16"/>
    </div>
</div>