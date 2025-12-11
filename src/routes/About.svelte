<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import Tech from "./Tech.svelte";
    import Resume from "./Resume.svelte";

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

    <Resume classname="mt-6 self-start" />

    <div class="flex flex-col gap-8 mt-24">
        <span class="text-lg font-[500]">TECH STACK</span>
        <div class="grid grid-cols-4 sm:grid-cols-5">
            <Tech
                name="HTML"
                path="html5.svg"
                url="https://skillicons.dev/icons?i=html"
            />
            <Tech
                name="CSS"
                path="css3.svg"
                url="https://skillicons.dev/icons?i=css"
            />
            <Tech
                name="Javascript"
                path="javascript.svg"
                url="https://skillicons.dev/icons?i=js"
            />
            <Tech
                name="Typescript"
                path="typescript.svg"
                url="https://skillicons.dev/icons?i=ts"
            />
            <Tech
                name="Tailwind"
                path="tailwindcss.svg"
                url="https://skillicons.dev/icons?i=tailwind"
            />
            <Tech
                name="Svelte"
                path="svelte.svg"
                url="https://skillicons.dev/icons?i=svelte"
            />
            <Tech
                name="React"
                path="react.svg"
                url="https://skillicons.dev/icons?i=react"
            />
            <Tech
                name="NextJS"
                path="nextdotjs.svg"
                url="https://skillicons.dev/icons?i=next"
            />
            <Tech
                name="Expo"
                path="expo.svg"
                imageclass="rounded-full bg-white"
            />
            <Tech name="Strapi" path="strapi.svg" />
            <Tech
                name="Supabase"
                path="supabase.svg"
                url="https://skillicons.dev/icons?i=supabase"
            />
            <Tech
                name="NodeJS"
                path="nodejs.svg"
                url="https://skillicons.dev/icons?i=nodejs"
            />
            <Tech
                name="Express"
                path=""
                url="https://skillicons.dev/icons?i=express"
            />
            <Tech
                name="NestJS"
                path=""
                url="https://skillicons.dev/icons?i=nestjs"
            />
            <Tech
                name="Prisma"
                path=""
                url="https://skillicons.dev/icons?i=prisma"
            />
            <Tech
                name="Docker"
                path=""
                url="https://skillicons.dev/icons?i=docker"
            />
            <Tech
                name="Redis"
                path=""
                url="https://skillicons.dev/icons?i=redis"
            />
            <Tech
                name="MySQL"
                path="mysql.svg"
                url="https://skillicons.dev/icons?i=mysql"
            />
            <Tech
                name="PostgreSQL"
                path="postgresql.svg"
                url="https://skillicons.dev/icons?i=postgresql"
            />
            <Tech
                name="Java"
                path="java.svg"
                url="https://skillicons.dev/icons?i=java"
            />
            <Tech name="SpigotMC" path="spigotmc.svg" />
            <Tech name="PaperMC" path="papermc.svg" />
        </div>
    </div>
</div>
