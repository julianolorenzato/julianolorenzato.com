<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte'
	import Title from '$lib/components/Title.svelte'
	import ProjectCard from '$lib/components/ProjectCard.svelte'
	import type { PageData } from './$types'

	export let data: PageData
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

<h1 class="text-gray-900 font-semibold text-3xl mt-8">Some projects</h1>

<ul class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
	{#each data.repos as { language, name, description, topics }}
		<ProjectCard {language} {name} {description} {topics} />
	{/each}
</ul>
