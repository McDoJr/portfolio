<script lang="ts">
    import { scalePath } from "$lib/utilities/svg";
    import { onDestroy, onMount } from "svelte";
    import { twMerge } from "tailwind-merge";
    let { classname = "", size: defaultSize = 300 } = $props();

    let size = $state(defaultSize);

    onMount(() => {
        function handleResize() {
            const width = window.innerWidth;
            size = width < 1024 ? 500 : defaultSize;
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        onDestroy(() => window.removeEventListener("resize", handleResize));
    });
</script>

<svg width="0" height="0">
    <defs>
        <mask id="wavy-circle-mask">
            <path id="wavy-path" fill="white">
                <animate
                    attributeName="d"
                    dur="5s"
                    repeatCount="indefinite"
                    values={scalePath(size)}
                />
            </path>
        </mask>
    </defs>
</svg>

<div
    class={twMerge("wavy-wrapper select-none", classname)}
    style={`--size: ${size}px;`}
>
    <div class="wavy-circle">
        <img
            src="/karl.jpeg"
            alt="Avatar.jpeg"
            class={twMerge(
                "scale-190 translate-y-[90px] translate-x-[10px]",
                size === 500 && "translate-y-[200px]",
            )}
        />
    </div>

    <svg
        width={size}
        height={size}
        viewBox="0 0 {size} {size}"
        class="wavy-border white-border"
    >
        <path fill="none" stroke="white" stroke-width="3">
            <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values={scalePath(size)}
            />
        </path>
    </svg>
</div>

<style>
    .wavy-wrapper {
        position: relative;
        width: var(--size);
        height: var(--size);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    .wavy-circle {
        width: var(--size);
        height: var(--size);
        mask: url(#wavy-circle-mask);
        -webkit-mask: url(#wavy-circle-mask);
        mask-size: cover;
        -webkit-mask-size: cover;
        overflow: hidden;
        position: absolute;
        background-color: antiquewhite;
        top: 0;
        left: 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .wavy-border {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    .white-border {
        width: var(--size);
        height: var(--size);
    }
</style>
