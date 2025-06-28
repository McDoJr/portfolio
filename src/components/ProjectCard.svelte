<script lang="ts">
    import Tag from "./Tag.svelte";

    type Props = {
        title: string;
        description: string;
        thumbnail: string;
        techs: string[];
    };

    const { title, description, thumbnail, techs }: Props = $props();
</script>

<div
    class="w-full py-4 rounded flex flex-col sm:flex-row gap-6 hover:px-4 hover:bg-white/3 transition-all hover:shadow-md cursor-pointer"
>
    <div class="w-[160px] h-[100px] rounded border-2 border-neutral-600">
        <img class="w-full h-full" src={thumbnail} alt="thumbnail.jpeg" />
    </div>
    <div class="flex-1 flex flex-col gap-3">
        <span class="text-[17px] text-neutral-300 font-[450]">{title}</span>
        <p class="text-[16px]">{description}</p>
        <div class="flex flex-wrap gap-3 items-center">
            {#each techs as tech}
                <Tag tag={tech} />
            {/each}
        </div>
    </div>
</div>
