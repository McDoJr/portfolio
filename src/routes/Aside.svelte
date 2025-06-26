<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { classname = "", children } = $props();
</script>

<div class={twMerge("max-w-[1350px] lg:w-[675px] flex", classname)}>
    {@render children()}
</div>
