<script>
    import { Github, Facebook, Mail } from "@lucide/svelte";
    import { twMerge } from "tailwind-merge";
    let { classname = "", ...props } = $props();
</script>

<div class={twMerge("flex gap-6 mt-auto text-zinc-400", classname)} {...props}>
    <a href="https://github.com/mcdojr" target="_blank">
        <Github
            class="cursor-pointer hover:text-white transition-colors duration-200"
        />
    </a>

    <a href="https://www.facebook.com/iamkbej/" target="_blank">
        <Facebook
            class="cursor-pointer hover:text-white transition-colors duration-200"
        />
    </a>

    <a href="mailto:iamkbejj@gmail.com">
        <Mail
            class="cursor-pointer hover:text-white transition-colors duration-200"
        />
    </a>
</div>
