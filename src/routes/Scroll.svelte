<script module>
    import About from "./About.svelte";
    import Experience from "./Experience.svelte";
    import Projects from "./Projects.svelte";
</script>

<script lang="ts">
    import view from "../store/view";
    import clicked from "../store/clicked";
    import type { View } from "../types";
    type ScrollEvent = UIEvent & {
        currentTarget: EventTarget & HTMLDivElement;
    };

    let prevScroll = 0;

    function isBottomReached(element: HTMLElement) {
        return element.scrollTop + element.clientHeight >= element.scrollHeight;
    }

    function isWithinView(elementId: View) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const scrollY = rect.top - 96;
        const hasReachedTop = scrollY <= 0;
        const hasPassedBy = scrollY + element.clientHeight <= 0;
        return hasReachedTop && !hasPassedBy && !$clicked;
    }

    function scroll(event: ScrollEvent) {
        const element = event.currentTarget;
        const scrollY = element.scrollTop;
        if (scrollY > prevScroll && !$clicked && isBottomReached(element)) {
            $view = "projects";
            return;
        }

        if (isWithinView("about")) {
            $view = "about";
        } else if (isWithinView("experience")) {
            $view = "experience";
        } else if (isWithinView("about")) {
            $view = "about";
        }

        prevScroll = scrollY;
    }
</script>

<div
    onscroll={scroll}
    id="scroll"
    class="w-full flex flex-col justify-start lg:overflow-auto"
>
    <div class="lg:w-[675px] pb-20 flex flex-col lg:py-20 lg:pt-24">
        <About />
        <Experience classname="mt-40" />
        <Projects classname="mt-60" />
    </div>
</div>
