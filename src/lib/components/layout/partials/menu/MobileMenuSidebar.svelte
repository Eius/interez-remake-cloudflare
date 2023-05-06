<script lang="ts">
	import { showMobileMenu } from "$lib/stores/ShowElements";
	import Icon from "@iconify/svelte";
	import MobileMenu from "./MobileMenu.svelte";


</script>

<div class="block lg:hidden">
    <div class="bg-gold p-4 z-50 fixed top-0 bottom-0 left-0 right-1/4 md:right-2/4 {$showMobileMenu ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300">
        <button class="float-right text-4xl" on:click={() => $showMobileMenu = false}>
            <Icon icon="material-symbols:close-rounded" />
        </button>
        <MobileMenu />
    </div>
</div>

