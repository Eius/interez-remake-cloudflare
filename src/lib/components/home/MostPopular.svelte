<script lang="ts">
    import {MostReadPosts} from '$lib/scripts/data/Posts';
	import Divider from './partials/Divider.svelte';
</script>

<div class="bg-secondary flex flex-col">
    <div class="bg-primary flex p-4">
        <h2 class="text-white text-lg font-semibold">Najčítanejšie</h2>
    </div>
    <div class="flex flex-col">
        {#each MostReadPosts as post, index}
            <Divider />
            <div class="flex px-4 py-3 gap-4">
                <p class="text-gray-2 text-2xl font-semibold">{index + 1}.</p>
                <a href="/" class="text-white font-semibold text-sm leading-relaxed tracking-wide">{post.title}</a>
            </div>
        {/each}
    </div>
</div>