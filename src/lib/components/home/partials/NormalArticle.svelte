<script lang="ts">
    import type {Meta} from "$lib/scripts/interfaces/I_Post";
    import PostMeta from "./PostMeta.svelte";

    export let img: string = "https://via.placeholder.com/400x230"
    export let title: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    export let meta: Meta;
</script>

<article class="flex py-4 last-of-type:pb-0">
    <img src={img} alt="" class="w-1/2 flex-grow">
    <div class="flex flex-col flex-grow px-4">
        <PostMeta {meta} />
        <h1 class="text-lg font-semibold leading-tight my-auto">{title}</h1>
    </div>
</article>