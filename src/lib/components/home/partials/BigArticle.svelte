<script lang="ts">
	import type {Meta} from "$lib/scripts/interfaces/I_Post";
	import PostMeta from "./PostMeta.svelte";

    export let img: string = "https://via.placeholder.com/400x230"
    export let title: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    export let meta: Meta;
</script>

<div class="flex flex-col pb-4 gap-2">
    <img src={img} alt="" class="w-full">
    <div class="flex"> <!-- Metadata Flexbox -->
        <PostMeta {meta} />
    </div>
    <h1 class="text-2xl font-semibold leading-tight">{title}</h1>
</div>