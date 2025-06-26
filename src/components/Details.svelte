<script>
    import { twMerge } from "tailwind-merge";
    let { classname = "", ...props } = $props();
</script>

<div
    class={twMerge("flex-1 flex flex-col text-neutral-content", classname)}
    {...props}
>
    <h1 class="text-6xl font-[600]">KARL BEJERANO</h1>
    <h2 class="text-xl">I BUILD THINGS FOR THE WEB</h2>

    <div class="mt-6 flex flex-col gap-3 text-[18px]">
        <p>
            I’m a junior full-stack web developer with experience in Next.js,
            Svelte, React, Node.js, Supabase, Strapi, and MySQL. I specialize in
            building scalable, real-time applications and have a strong focus on
            performance.
        </p>
        <p>
            Additionally, I have expertise in Minecraft plugin development using
            Spigot, Paper, BungeeCord, and NMS to create custom gameplay
            features.
        </p>
        <p>
            I’m also skilled in mobile development with React Native Expo,
            including camera integration, offline storage, and API-driven apps.
        </p>
        <p>
            I’m passionate about problem-solving and always eager to learn and
            apply new technologies. Let’s build something great together! 🚀
        </p>
    </div>
</div>
