<script lang="ts">
    import {showSearch} from "$lib/stores/ShowSearch";
	import Icon from "@iconify/svelte";
</script>

<div class="bg-gold {$showSearch ? "h-[50px]" : "h-[0px]"} transition-all duration-300 block lg:hidden">
    <div class="container {$showSearch ? "opacity-100" : "opacity-0"} h-full flex gap-2 items-center transition-opacity duration-300">
        <button>
            <Icon icon="material-symbols:search" class="text-2xl" />
        </button>
        <form action="" class="h-3/4">
            <input type="text" placeholder="Hladať" class="h-full pl-3">
        </form>
    </div>
</div>
