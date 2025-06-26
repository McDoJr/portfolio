<script lang="ts">
    type Props = {
        tag: string;
    };
    const { tag }: Props = $props();
</script>

<div class="py-1 px-2 rounded-box bg-[#c7cbcb]">
    <p class="text-[14px] text-[#150759]">{tag}</p>
</div>
