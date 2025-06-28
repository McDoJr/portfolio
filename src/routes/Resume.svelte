<script lang="ts">
    import { ExternalLink } from "@lucide/svelte";

    type Props = {
        classname: string;
    };

    const { classname }: Props = $props();
</script>

<div class={classname}>
    <a
        class="flex items-center gap-2 text-neutral-400 hover:text-white"
        href="https://profile.indeed.com/p/karlmarfredb-kphbngj"
        target="_blank"
    >
        <span>View Indeed.com Resume</span>
        <ExternalLink size={18} />
    </a>
</div>
