<script lang="ts">
	import Icon from "@iconify/svelte";
    import {showSearch} from "$lib/stores/ShowSearch";

</script>

<div class="flex items-center relative">
    <button class="text-gold text-2xl ml-4 hidden lg:block" on:click={() => {$showSearch = true}}> <!-- Desktop Open Search Button -->
        <Icon icon="material-symbols:search" />
    </button>
    <button class="text-gold text-2xl ml-4 block lg:hidden" on:click={() => {$showSearch = !$showSearch}}> <!-- Mobile Open Search Button -->
        <Icon icon="{$showSearch ? "material-symbols:close-rounded" : "material-symbols:search"}" />
    </button>
    <div class="bg-primary absolute hidden lg:flex right-0 {$showSearch ? 'top-0' : '-top-[200%]'} transition-all"> <!-- Absolute wrapper -->
        <button class="text-gold text-2xl mr-2" on:click={() => {$showSearch = false}}> <!-- Close Button -->
            <Icon icon="material-symbols:close-rounded" />
        </button>
        <button class="text-gold text-2xl mr-4"> <!-- Search Button -->
            <Icon icon="material-symbols:search" />
        </button>
        <form action="">
            <div class="border-b border-gold">
                <input type="text" class="bg-primary relative text-gold text-sm placeholder:text-gold placeholder:text-sm focus:outline-none" placeholder="Hľadať" />
            </div>
        </form>
    </div>
</div>

<style lang="postcss">
    
</style>
