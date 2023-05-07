<script lang="ts">
	import Socials from './partials/socials/Socials.svelte';

    const currentYear = new Date().getFullYear();

	interface LinkProps {
		title: string;
		href: string;
	}

	const menuItems: LinkProps[] = [
		{
			title: 'O nás',
			href: '/'
		},
		{
			title: 'Cenník',
			href: '/'
		},
		{
			title: 'Chcem inzerovať',
			href: '/'
		},
		{
			title: 'Súbory cookies',
			href: '/'
		},
		{
			title: 'Nastavenia cookies',
			href: '/'
		}
	];

	const refItems: LinkProps[][] = [
		[
			{
				title: 'Interez.sk',
				href: 'https://www.interez.sk/'
			},
			{
				title: 'Receptik.sk',
				href: 'https://receptik.interez.sk/'
			},
			{
				title: 'Femm.sk',
				href: 'https://femm.interez.sk/'
			},
			{
				title: 'Psych.sk',
				href: 'https://www.interez.sk/profil/psych/'
			},
			{
				title: 'Yimba.sk',
				href: 'https://www.yimba.sk/'
			}
		],
		[
			{
				title: 'Fontech.sk',
				href: 'https://fontech.startitup.sk/'
			},
			{
				title: 'Startitup.sk',
				href: 'https://www.startitup.sk/'
			},
			{
				title: 'Odzadu.sk',
				href: 'https://odzadu.startitup.sk/'
			},
			{
				title: 'Emefka.sk',
				href: 'https://emefka.sk/'
			}
		]
	];

    const legalItems: LinkProps[] = [
        {
            title: "Podmienky používania",
            href: "/"
        },
        {
            title: "Podmienky ochrany súkromia",
            href: "/"
        },
        {
            title: "Pravidlá Instagramovej súťaže",
            href: "/"
        },
        {
            title: "VOP reklamných služieb",
            href: "/"
        },
        {
            title: "Notifikácie",
            href: "/"
        }
    ]
</script>

<footer class="bg-primary border-b border-gray-1">
	<div class="container pt-16 pb-6 flex flex-col gap-16">
		<div class="grid grid-cols-3">
			<div class="col-span-1 flex flex-col justify-end gap-6 w-3/4">
				<img src="/logo-interez-white.webp" alt="" class="" />
				<div class="flex text-white text-xl justify-between">
					<Socials />
				</div>
                <a href="https://trsr.sk/wp-content/uploads/Eticky_kodex.pdf" target="_blank">
                    <img src="/eticky_kodex.webp" alt="" />
                </a>
			</div>
			<div class="col-span-1 flex flex-col justify-end">
				<ul class="flex flex-col gap-4">
					{#each menuItems as { title, href }}
						<a {href} class="hover:text-gold text-white transition-colors duration-150">
							<li class="text-lg font-semibold">{title}</li>
						</a>
					{/each}
				</ul>
			</div>
			<div class="col-span-1 flex flex-col items-start gap-6">
                <img src="/siug-logo.svg" alt="" class="max-h-[60px]" />
				<div class="flex gap-16">
                    <ul class="flex flex-col gap-4">
                        {#each refItems[0] as { title, href }}
                            <a {href} class="hover:text-gold text-gray-2 transition-colors duration-150">
                                <li class="text-lg">{title}</li>
                            </a>
                        {/each}
                    </ul>
                    <ul class="flex flex-col gap-4">
                        {#each refItems[1] as { title, href }}
                            <a {href} class="hover:text-gold text-gray-2 transition-colors duration-150">
                                <li class="text-lg">{title}</li>
                            </a>
                        {/each}
                    </ul>
				</div>
			</div>
		</div>
        <ul class="flex justify-center gap-4">
            {#each legalItems as {title, href}, index}
                {#if index > 0}
                    <span class="text-gray-2 text-sm">|</span>
                {/if}
                <a {href} class="hover:text-gold text-gray-2 transition-colors duration-150">
                    <li class="text-sm">{title}</li>
                </a>
            {/each}
        </ul>
	</div>
</footer>
<div class="bg-primary">
    <div class="container">
        <div class="flex justify-between items-center py-4">
            <p class="text-white text-xs">© Interez.sk 2014-{currentYear}</p>
            <p class="text-gold text-md font-semibold">Byť smart je interez</p>
            <p class="text-gray-2 text-xs"><span class="text-white">Interez.sk,</span> člen skupiny Startitup Group</p>
        </div>
    </div>
</div>
