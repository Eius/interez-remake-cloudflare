<script lang="ts">
    import Icon from '@iconify/svelte';
	import MobileMenuButton from './partials/menu/MobileMenuButton.svelte';
	import DesktopMenu from './partials/menu/DesktopMenu.svelte';
	import LoginRegister from './partials/login-register/LoginRegister.svelte';
	import Search from './partials/search/Search.svelte';
	import MobileSearch from './partials/search/MobileSearch.svelte';
	import Socials from './partials/socials/Socials.svelte';
	import MobileMenuSidebar from './partials/menu/MobileMenuSidebar.svelte';
    
</script>

<MobileMenuSidebar />
<nav class="bg-primary border-b border-gray-1 sticky z-40 top-0 right-0 left-0">
    <MobileSearch />
    <div class="container grid grid-cols-3 py-4">
        <div class="col-span-1 flex items-center">
            <MobileMenuButton />
        </div>
        <div class="flex lg:hidden col-span-1 justify-center items-center">
            <a href="/">
                <img src="/logo-interez-white.webp" alt="Logo" class="max-w-[120px]">
            </a>
        </div>
        <div class="hidden lg:flex col-span-1 justify-center items-center gap-4 text-white text-md"> <!-- Socials Wrapper -->
            <Socials />
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