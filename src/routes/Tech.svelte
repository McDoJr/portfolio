<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { classname = "", imageclass = "", path, name, ...props } = $props();
</script>

<div
    class={twMerge(
        "py-2 w-20 rounded flex flex-col items-center gap-2 group cursor-default hover:bg-white/5",
        classname,
    )}
    {...props}
>
    <img
        src={`/svg/${path}`}
        alt={path}
        class={twMerge(
            "w-9 h-9 transition-all group-hover:-translate-y-1",
            imageclass,
        )}
    />
    <span class="text-[16px] text-neutral-content font-[400]">{name}</span>
</div>
