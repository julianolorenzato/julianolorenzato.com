<script lang="ts">
	import Header from '$lib/components/Header.svelte'
	import '../app.css'
</script>

<svelte:head>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😎</text></svg>"
	/>
</svelte:head>

<Header />

<main class="px-4 pb-4 sm:px-12 md:px-44">
	<slot />
</main>
