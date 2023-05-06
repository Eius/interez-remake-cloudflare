<script lang="ts">
	import Icon from "@iconify/svelte";

    let modal: HTMLDialogElement | undefined = undefined;
    let isOpen: boolean = false;

    function toggleModal() {
        if (!modal) return;
        switch (isOpen) {
            case true:
                modal.close();
                isOpen = false;
                break;
            case false:
                modal.show();
                isOpen = true;
                break;
        }
    }

    const textItem: {text: string, link: string}[] = [
        {
            text: "Prihlásiť",
            link: "/login",
        },
        {
            text: "Registrovať",
            link: "/register",
        },
    ]
</script>

<p class="text-white font-semibold hidden lg:block">
    <a href="/login">Prihlásiť</a>
    /
    <a href="/register">Registrovať</a>
</p>

<button class="flex lg:hidden relative text-white text-2xl items-center" on:click={toggleModal}>
    <Icon icon="material-symbols:person-2-rounded" />
    <dialog bind:this={modal} class="absolute top-full left-1/2 -translate-x-1/2 mx-auto mt-3 bg-secondary">
        <ul class="text-white text-base text-start font-semibold">
            {#each textItem as {text, link}}
                <li class="py-3 px-4 hover:bg-primary first-of-type:border-b border-gray-1">
                    <a href={link}>{text}</a>
                </li>
            {/each}
        </ul>
    </dialog>
</button>

