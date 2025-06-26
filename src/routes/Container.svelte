<script>
    import { twMerge } from "tailwind-merge";
    let { classname = "", children, ...props } = $props();
</script>

<div class={twMerge("w-full flex justify-center", classname)} {...props}>
    {@render children()}
</div>
