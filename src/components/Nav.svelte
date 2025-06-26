<script lang="ts">
    import { twMerge } from "tailwind-merge";
    type Position = "about" | "projects" | "resume";
    let { classname = "", ...props } = $props();
    let position = $state<Position>("about");

    $effect(() => {
        scroll(position);
    });

    function scroll(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
</script>

<nav
    class={twMerge(
        "fixed top-0 left-0 z-[1]",
        "w-full flex items-center justify-between p-4 px-46",
        "bg-zinc-900 text-neutral-content shadow-lg select-none",
        classname,
    )}
    {...props}
>
    <button onclick={() => (position = "about")}>
        <h1 class="text-2xl cursor-pointer font-[600]">LOGO</h1>
    </button>
    <div class="flex items-center gap-4 text-lg">
        <button
            onclick={() => (position = "about")}
            class:text-zinc-600={position === "about"}>ABOUT</button
        >
        <button
            onclick={() => (position = "projects")}
            class:text-zinc-600={position === "projects"}>PROJECTS</button
        >
        <button
            onclick={() => (position = "resume")}
            class:text-zinc-600={position === "resume"}>RESUME</button
        >
    </div>
</nav>

<style>
    button {
        cursor: pointer;
        transition: 0.3s ease all;
    }
</style>
