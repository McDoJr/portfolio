<script lang="ts">
    type Props = {
        title: string;
        date: string;
        descriptions: string[];
    };
    let { title, date, descriptions }: Props = $props();
</script>

<div
    class="py-1 flex flex-col gap-1 cursor-default hover:scale-105 hover:translate-x-4 transition-all"
>
    <span class="text-sm font-[450] text-neutral-500 mb-1">{date}</span>
    <h5 class="text-md text-neutral-300 font-[450]">{title}</h5>
    {#each descriptions as description}
        <div class="mt-2 text-[16px]">{description}</div>
    {/each}
</div>
