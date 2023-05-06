<script lang="ts">
	import Icon from "@iconify/svelte";
    import {showMobileMenu} from "$lib/stores/ShowElements";
</script>

<a href="/" class="text-gray-2 text-xs hover:text-white hidden lg:inline">
    Pracuj pre interez
</a>
<button class="block lg:hidden" on:click={() => $showMobileMenu = true}>
    <span class="text-white text-3xl">
        <Icon icon="material-symbols:menu" />
    </span>
</button>