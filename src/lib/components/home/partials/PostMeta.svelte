<script lang="ts">
	import type { Meta } from '$lib/scripts/interfaces/I_Post';
	import Icon from '@iconify/svelte';

	export let meta: Meta;
	let { publishDate, tag } = meta;

	function formatDate(date: Date) {
		const now = new Date();
		const diffMs = now.getTime() - date.getTime(); // subtract the timestamp values
		const diffMins = Math.floor(diffMs / 60000); // number of minutes difference
		const diffHrs = Math.floor(diffMs / 3600000); // number of hours difference
		const diffDays = Math.floor(diffMs / 86400000); // number of days difference

		if (diffMins < 15) {
			return 'pred chvíľou';
		} else if (diffMins < 30) {
			return 'pred 15 minútami';
		} else if (diffMins < 45) {
			return 'pred 30 minútami';
		} else if (diffMins < 60) {
			return 'pred 45 minútami';
		} else if (diffHrs < 1) {
			return `pred ${diffMins} minútami`;
		} else if (diffHrs < 2) {
			return 'pred 1 hodinou';
		} else if (diffHrs < 6) {
			return `pred ${diffHrs} hodinami`;
		} else if (date.toDateString() === now.toDateString()) {
			const hours = String(date.getHours()).padStart(2, '0');
			const minutes = String(date.getMinutes()).padStart(2, '0');
			return `dnes o ${hours}:${minutes}`;
		} else if (diffDays === 1) {
			return `včera o ${date.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })}`;
		} else if (date.getFullYear() < now.getFullYear()) {
			return date.toLocaleDateString('sk-SK', { day: 'numeric', month: 'long', year: 'numeric' });
		} else {
			return date.toLocaleDateString('sk-SK', { day: 'numeric', month: 'long' });
		}
	}
</script>

<div class="flex items-center text-gray-2">
	<!-- Metadata Flexbox -->
	<Icon icon="ic:round-access-time-filled" class="mr-1" />
	<p class="text-xs">{formatDate(publishDate)}</p>
	{#if tag !== undefined}
		<Icon icon="ph:dot-bold" />
		<Icon icon="mdi:tag" class="mr-1" />
		<a href="/tag/{tag}" class="underline text-xs">{tag}</a>
	{/if}
</div>
