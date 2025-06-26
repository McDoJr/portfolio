<script>
    import Avatar from "./Avatar.svelte";
    import Nav from "./Nav.svelte";
    import Socials from "./Socials.svelte";
</script>

<div class="w-full flex justify-end">
    <div
        class="lg:w-[675px] flex flex-col py-20 text-neutral-content font-inter"
    >
        <div
            class="flex-1 flex flex-col items-center lg:items-start lg:flex-row mb-4"
        >
            <div
                class="flex-1 h-full px-2 sm:px-24 pt-6 lg:px-0 flex flex-col items-center lg:items-start gap-2"
            >
                <h1 class="text-2xl sm:text-6xl lg:text-4xl font-[500]">
                    KARL BEJERANO
                </h1>
                <h2
                    class="text-xl sm:text-5xl lg:text-2xl text-zinc-400 font-[500]"
                >
                    Junior Developer
                </h2>
                <p class="hidden lg:inline text-zinc-500 mt-3">
                    I design and develop intuitive, <br /> high-performance
                    websites that blend<br /> creativity with seamless functionality.
                </p>
                <Nav classname="mt-12" />
                <Socials classname="hidden lg:flex" />
            </div>
            <Avatar classname="lg:flex-1" size={250} />
            <p
                class="lg:hidden text-[16px] sm:text-2xl text-center text-zinc-500 mt-3"
            >
                I design and develop intuitive, high-performance websites that
                blend creativity with seamless functionality.
            </p>
            <Socials classname="lg:hidden mt-16" />
        </div>
    </div>
</div>
