<script lang="ts">
    import Icon from '@iconify/svelte';
	import { prevent_default } from 'svelte/internal';
</script>

<nav class="bg-primary border-b border-gray-1">
    <div class="container flex items-center py-4">
        <div class="flex-grow">
            <a href="/" class="text-gray-2 text-xs hover:text-white self-start">
                Pracuj pre interez
            </a>
        </div>
        <div class="flex items-center gap-6 text-white text-md justify-self-center"> <!-- Socials Wrapper -->
            <Icon icon="uil:facebook-f" />
            <Icon icon="uil:twitter" />
            <Icon icon="ic:baseline-tiktok" />
            <Icon icon="uil:instagram" />
            <Icon icon="uil:youtube" />
        </div>
        <div class="flex-grow"> <!-- Search Wrapper -->
            <p class="text-white text-end">Search</p>
        </div>
    </div>
</nav>