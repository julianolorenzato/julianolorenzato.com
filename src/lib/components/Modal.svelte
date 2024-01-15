<script lang="ts">
	import { onMount } from 'svelte'
	import { X } from 'lucide-svelte'
	import { slide, fade, fly } from 'svelte/transition'
	export let show: boolean
	export let name: string

	const handleClose = () => (show = false)

	let getReadme: Promise<any>

	onMount(async () => {
		getReadme = fetch(`/readme?name=${name}`).then(res => res.json())
	})
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.0/github-markdown.min.css"
	/>
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if show}
	<!-- backdrop -->
	<div
		transition:fade|global
		class="fixed inset-0 opacity-25 w-screen h-screen bg-black"
		on:click|self={handleClose}
	/>

	<!-- modal -->
	<div
		transition:fly|global={{ y: 50 }}
		role="dialog"
		class="z-50 bg-white max-h-[95vh] overflow-y-scroll w-full md:w-fit max-w-5xl fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg shadow-md"
	>
		<button class="absolute top-5 right-5" on:click={handleClose}
			><X class="text-white" /></button
		>

		{#await getReadme}
			<p>Loading</p>
		{:then readme}
			<div class="markdown-body p-8 pt-3">
				{@html readme}
			</div>
		{/await}
	</div>
{/if}
