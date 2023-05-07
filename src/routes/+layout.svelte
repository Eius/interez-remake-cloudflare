<script lang="ts">
	import "@fontsource/montserrat/200.css";
	import "@fontsource/montserrat/400.css";
	import "@fontsource/montserrat/600.css";
	import "@fontsource/montserrat/800.css";
	import "../app.css";
	import "$lib/styles/global.css"

	import NavHeader from "$lib/components/layout/NavHeader.svelte";
	import Footer from "$lib/components/layout/Footer.svelte";
</script>

<svelte:head>
	<title>interez.sk | byť smart je interez</title>
</svelte:head>

<div class="app">
	
	<NavHeader />
	<main>
		<slot />
	</main>
	<Footer />
</div>
