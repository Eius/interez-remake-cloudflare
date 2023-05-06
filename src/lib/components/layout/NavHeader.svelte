<script lang="ts">
    import Icon from '@iconify/svelte';
	import MobileMenu from './MobileMenu.svelte';
	import DesktopMenu from './DesktopMenu.svelte';
	import LoginRegister from './LoginRegister.svelte';
	import Search from './Search.svelte';
	import MobileSearch from './MobileSearch.svelte';

    
</script>

<nav class="bg-primary border-b border-gray-1 fixed top-0 right-0 left-0">
    <MobileSearch />
    <div class="container grid grid-cols-3 py-4">
        <div class="col-span-1 flex items-center">
            <MobileMenu />
        </div>
        <div class="flex lg:hidden col-span-1 justify-center items-center">
            <a href="/">
                <img src="/logo-interez-white.webp" alt="Logo" class="max-w-[120px]">
            </a>
        </div>
        <div class="hidden lg:flex col-span-1 justify-center items-center gap-6 text-white text-md"> <!-- Socials Wrapper -->
            <Icon icon="uil:facebook-f" />
            <Icon icon="uil:twitter" />
            <Icon icon="ic:baseline-tiktok" />
            <Icon icon="uil:instagram" />
            <Icon icon="uil:youtube" />
        </div>
        <div class="col-span-1 flex items-center justify-end">
            <LoginRegister />
            <Search />
        </div>
    </div>
</nav>
<div class="bg-primary">
    <div class="container hidden lg:block">
        <a href="/">
            <img src="/logo-interez-white.webp" alt="Logo" class="py-20 mx-auto">
        </a>
        <DesktopMenu />
    </div>
</div>