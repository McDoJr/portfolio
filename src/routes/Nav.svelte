<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import view from "../store/view";
    import type { View } from "../types";
    import clicked from "../store/clicked";

    let { classname = "", ...props } = $props();

    function scroll(id: View) {
        $view = id;
        $clicked = true;
        setTimeout(() => ($clicked = false), 1200);
        const element = document.getElementById($view);
        const scrollable = document.getElementById("scroll");
        if (element && scrollable) {
            const top = element.getBoundingClientRect().top;
            const current = scrollable.scrollTop;
            const offset = top + current - 96;
            scrollable.scroll({
                top: offset,
                behavior: "smooth",
            });
        }
    }
</script>

<nav
    class={twMerge(
        "hidden lg:flex flex-col justify-center items-start gap-6 font-[600] transition-all",
        classname,
    )}
    {...props}
>
    <button
        onclick={() => scroll("about")}
        class={twMerge(
            "flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all cursor-pointer group",
            $view === "about" && "text-white",
        )}
    >
        <div
            class={twMerge(
                "w-10 h-[1px] bg-zinc-400 transition-all group-hover:w-26 group-hover:bg-white",
                $view === "about" && "bg-white w-26",
            )}
        ></div>
        ABOUT</button
    >
    <button
        onclick={() => scroll("experience")}
        class={twMerge(
            "flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all cursor-pointer group",
            $view === "experience" && "text-white",
        )}
    >
        <div
            class={twMerge(
                "w-10 h-[1px] bg-zinc-400 transition-all group-hover:w-26 group-hover:bg-white",
                $view === "experience" && "bg-white w-26",
            )}
        ></div>
        EXPERIENCE</button
    >
    <button
        onclick={() => scroll("projects")}
        class={twMerge(
            "flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all cursor-pointer group",
            $view === "projects" && "text-white",
        )}
    >
        <div
            class={twMerge(
                "w-10 h-[1px] bg-zinc-400 transition-all group-hover:w-26 group-hover:bg-white",
                $view === "projects" && "bg-white w-26",
            )}
        ></div>
        PROJECTS</button
    >
</nav>
