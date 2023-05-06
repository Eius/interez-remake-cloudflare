<script lang="ts">
	import Icon from "@iconify/svelte";

    const socials: {icon: string, link: string}[] = [
        {
            icon: "uil:facebook-f",
            link: "/",
        },
        {
            icon: "uil:twitter",
            link: "/",
        },
        {
            icon: "ic:baseline-tiktok",
            link: "/",
        },
        {
            icon: "uil:instagram",
            link: "/",
        },
        {
            icon: "uil:youtube",
            link: "/",
        },
    ];
</script>

{#each socials as {icon, link}}
    <a href={link} class="hover:scale-125 transition-transform duration-100 px-2">
        <Icon icon={icon} />
    </a>  
{/each}
