<script lang="ts">
    import BigArticle from '$lib/components/home/partials/BigArticle.svelte';
	import Divider from './partials/Divider.svelte';
	import NormalArticle from './partials/NormalArticle.svelte';
	import { Posts } from '$lib/scripts/data/Posts';
</script>

<div class="flex flex-col">
	{#each Posts as post, index}
		{#if index === 0}
			<BigArticle title={post.title} img={post.image} meta={post.meta} />
		{:else}
			<Divider />
			<NormalArticle title={post.title} img={post.image} meta={post.meta} />
		{/if}
	{/each}
</div>
