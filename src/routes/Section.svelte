<script lang="ts">
    import { twMerge } from "tailwind-merge";
    let { children, classname = "", ...props } = $props();
</script>

<section
    class={twMerge(
        "w-full min-h-screen lg:h-screen grow flex justify-center overflow-auto lg:overflow-hidden",
        "bg-gradient-to-br from-[#0d0630] to-[#150759]",
        classname,
    )}
    {...props}
>
    {@render children()}
</section>
