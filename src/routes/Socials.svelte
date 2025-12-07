<script>
    import Fa from "svelte-fa";
    import {
        faUpwork,
        faGithub,
        faFacebookF,
        faLinkedinIn,
    } from "@fortawesome/free-brands-svg-icons";
    import { twMerge } from "tailwind-merge";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    let { classname = "", ...props } = $props();
</script>

<div class={twMerge("flex gap-6 mt-auto text-zinc-400", classname)} {...props}>
    <a href="https://github.com/mcdojr" target="_blank">
        <Fa
            icon={faGithub}
            class="cursor-pointer text-xl hover:text-white transition-colors duration-200"
        />
    </a>

    <a href="https://www.facebook.com/iamkbej/" target="_blank">
        <Fa
            icon={faFacebookF}
            class="cursor-pointer text-xl hover:text-white transition-colors duration-200"
        />
    </a>

    <a
        href="https://www.linkedin.com/in/karl-bejerano-232121298/"
        target="_blank"
    >
        <Fa
            icon={faLinkedinIn}
            class="cursor-pointer text-xl hover:text-white transition-colors duration-200"
        />
    </a>

    <a
        href="https://www.upwork.com/freelancers/~01141818a54508e446"
        target="_blank"
    >
        <Fa
            icon={faUpwork}
            class="cursor-pointer text-[22px] hover:text-white transition-colors duration-200"
        />
    </a>

    <a href="mailto:iamkbejj@gmail.com">
        <Fa
            icon={faEnvelope}
            class="cursor-pointer text-xl hover:text-white transition-colors duration-200"
        />
    </a>
</div>
