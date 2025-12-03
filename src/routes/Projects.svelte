<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import ProjectCard from "../components/ProjectCard.svelte";

    let { classname = "", ...props } = $props();
</script>

<div
    id="projects"
    class={twMerge(
        "flex flex-col gap-5 text-2xl lg:text-[18px] text-neutral-400 font-[300]",
        classname,
    )}
    {...props}
>
    <h1 class="inline text-lg font-[500] mb-6 lg:hidden">PROJECTS</h1>
    <ProjectCard
        title="Medico Realty App"
        description="A comprehensive real estate management system that consolidates client data, financial records, and documentation into a single platform, improving accuracy, transparency, and workflow efficiency for realty businesses."
        thumbnail="/realty1.png"
        techs={["NextJS", "Typescript", "Tailwind", "Shadcn", "MySQL"]}
    />
    <ProjectCard
        title="Office of Civil Defense Caraga — Document Tracking"
        description="A tool to track, manage, and monitor documents in real-time, ensuring transparency and faster processing within the Office of Civil Defense Caraga."
        thumbnail="/dtr1.png"
        techs={["Svelte", "Typescript", "Tailwind"]}
    />
    <ProjectCard
        title="Office of Civil Defense Caraga — Records"
        description="A centralized system for organizing, storing, and retrieving official records, designed to enhance efficiency, security, and accessibility within the Office of Civil Defense Caraga."
        thumbnail="/records1.png"
        techs={["NextJS", "Typescript", "Tailwind", "MySQL"]}
    />
    <ProjectCard
        title="Butuan Legal Access"
        description="A thesis-based mobile app that helps users locate nearby law firms and directly connect with lawyers in Butuan City for faster and easier legal assistance."
        thumbnail="/legalaccess1.png"
        techs={[
            "React Native Expo",
            "Typescript",
            "Tailwind",
            "Supabase",
            "Google API",
        ]}
    />
    <ProjectCard
        title="Beyond Breeds"
        description="A thesis-based mobile app that connects aspiring pet owners with nearby shelters, making pet adoption easier, faster, and more accessible."
        thumbnail="/breeds1.png"
        techs={[
            "React Native Expo",
            "Typescript",
            "Tailwind",
            "Supabase",
            "Google API",
        ]}
    />
    <ProjectCard
        title="Museu de Cabadbaran"
        description="A thesis-based mobile app that uses image classification to scan and identify museum artifacts, providing users with instant historical information and context."
        thumbnail="/museu1.png"
        techs={[
            "React Native Expo",
            "Typescript",
            "Tailwind",
            "Supabase",
            "TensorFlow.js",
        ]}
    />
</div>
