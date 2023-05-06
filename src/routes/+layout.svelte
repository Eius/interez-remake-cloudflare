<script lang="ts">
	import "@fontsource/montserrat/200.css";
	import "@fontsource/montserrat/400.css";
	import "@fontsource/montserrat/600.css";
	import "@fontsource/montserrat/800.css";
	import "../app.css";
	import "$lib/styles/global.css"
	import NavHeader from "$lib/components/layout/NavHeader.svelte";
</script>

<div class="app">
	
	<NavHeader />
	<main>
		<slot />
	</main>
</div>
