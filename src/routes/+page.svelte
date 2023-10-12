<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte'
	import Title from '$lib/components/Title.svelte'
</script>

<svelte:head>
	<title>Juliano Lorenzato - Software Developer</title>
</svelte:head>

<section
	class="min-h-[calc(100vh-80px)] flex-grow flex items-center gap-4 justify-center flex-col-reverse md:flex-row"
>
	<Title />
	<Avatar />
</section>
