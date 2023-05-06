<script lang="ts">
    interface LinkProps {
        title: string;
        href: string;
    }

    const menuItems: LinkProps[] = [
        {
            title: 'Knihy interez.sk',
            href: '/'
        },
        {
            title: 'Správy',
            href: '/'
        },
        {
            title: 'Interez original',
            href: '/'
        },
        {
            title: 'Cestovanie',
            href: '/'
        },
        {
            title: 'Veda',
            href: '/'
        },
        {
            title: 'Filmy a seriály',
            href: '/'
        },
        {
            title: 'Kvízy',
            href: '/'
        },
        {
            title: 'Blog',
            href: '/'
        }
    ]
</script>

<ul class="flex justify-between pb-8">
    {#each menuItems as item}
        <a href={item.href} class="py-4">
            <li class="text-white">{item.title}</li>
        </a>
    {/each}
</ul>

<style lang="postcss">

    li {
        position: relative;
    }

    li::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -3px;
        opacity: 0;
        height: 1px;
        width: 100%;
        background-color: theme("colors.white");
        transition: all 0.1s ease-in-out;
    }

    a:hover li::after {
        bottom: 1px;
        opacity: 1;
    }
</style>
