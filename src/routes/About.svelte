<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import Tech from "./Tech.svelte";

    let { classname = "", ...props } = $props();
</script>

<div
    id="about"
    class={twMerge(
        "flex flex-col gap-5 text-[16px] lg:text-[16px] text-neutral-400 font-[300]",
        classname,
    )}
    {...props}
>
    <h1 class="inline text-lg font-[500] mb-6 lg:hidden">ABOUT</h1>
    <p>
        I’m a junior full-stack web developer with experience in Next.js,
        Svelte, React, Node.js, Express, Supabase, Strapi, PosgreSQL and MySQL.
        I specialize in building scalable, real-time applications and have a
        strong focus on performance.
    </p>
    <p>
        Additionally, I have expertise in Minecraft plugin development using
        Spigot, Paper, BungeeCord, and NMS to create custom gameplay features.
    </p>
    <p>
        I’m also skilled in mobile development with React Native Expo, including
        camera integration, Google Maps, offline storage, and API-driven apps.
    </p>
    <p>
        I’m passionate about problem-solving and always eager to learn and apply
        new technologies. Let’s build something great together! 🚀
    </p>

    <div class="flex flex-col gap-8 mt-24">
        <span class="text-lg font-[500]">TECH STACK</span>
        <div class="flex items-center flex-wrap gap-6">
            <Tech name="HTML" path="html5.svg" />
            <Tech name="CSS" path="css3.svg" />
            <Tech name="Javascript" path="javascript.svg" />
            <Tech name="Typescript" path="typescript.svg" />
            <Tech name="Tailwind" path="tailwindcss.svg" />
            <Tech name="Svelte" path="svelte.svg" />
            <Tech name="React" path="react.svg" />
            <Tech name="NextJS" path="nextdotjs.svg" />
            <Tech
                name="Expo"
                path="expo.svg"
                imageclass="rounded-full bg-white"
            />
            <Tech name="Strapi" path="strapi.svg" />
            <Tech name="Supabase" path="supabase.svg" />
            <Tech name="NodeJS" path="nodejs.svg" />
            <Tech name="MySQL" path="mysql.svg" imageclass="rounded bg-white" />
            <Tech name="PostgreSQL" path="postgresql.svg" />
            <Tech name="Java" path="java.svg" />
            <Tech name="SpigotMC" path="spigotmc.svg" />
            <Tech name="PaperMC" path="papermc.svg" />
        </div>
    </div>
</div>
