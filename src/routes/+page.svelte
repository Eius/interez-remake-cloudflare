<script lang="ts">
	import Ad from "$lib/components/home/Ad.svelte";
	import ArticleList from "$lib/components/home/ArticleList.svelte";
	import MostPopular from "$lib/components/home/MostPopular.svelte";


</script>

<div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-3 py-8 gap-6">
        <div class="col-span-1 lg:col-span-2">
            <ArticleList />
        </div>
        <div class="col-span-1 lg:col-span-1 flex flex-col gap-8">
            <MostPopular />
            <Ad />
        </div>
    </div>
</div>