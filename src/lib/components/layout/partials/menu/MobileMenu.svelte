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

<div class="flex flex-col items-center justify-between h-full">
    <ul class="flex flex-col justify-between">
        {#each menuItems as item}
            <a href={item.href} class="py-4">
                <li class="text-primary text-xl font-bold">{item.title}</li>
            </a>
        {/each}
    </ul>
    <a href="/" class="text-primary text-xl hover:text-white">
        Pracuj pre interez
    </a>
</div>