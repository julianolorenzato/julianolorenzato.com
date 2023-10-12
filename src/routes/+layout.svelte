<script lang="ts">
	import Header from '$lib/components/Header.svelte'
	import '../app.css'
</script>

<Header />

<main class="px-4 pb-4 sm:px-12 md:px-44">
	<slot />
</main>
