<script lang="ts">
	import "@fontsource/montserrat/200.css";
	import "@fontsource/montserrat/400.css";
	import "@fontsource/montserrat/600.css";
	import "@fontsource/montserrat/800.css";
	import "../app.css";
	import "$lib/styles/global.css"
	import NavMenu from "$lib/components/layout/NavMenu.svelte";
</script>

<div class="app">
	<NavMenu />
	<main>
		<slot />
	</main>
</div>
