<script module>
    import Section from "./Section.svelte";
    import Title from "./Title.svelte";
    import Sidebar from "./Sidebar.svelte";
    import Container from "./Container.svelte";
    import Scroll from "./Scroll.svelte";
</script>

<script lang="ts">
</script>

<Title />
<Section classname="px-6 sm:px-12 lg:px-0 gap-6">
    <Container classname="flex-col lg:flex-row gap-4">
        <Sidebar />
        <Scroll />
    </Container>
</Section>
