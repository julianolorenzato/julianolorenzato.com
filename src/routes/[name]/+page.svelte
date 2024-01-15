<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte'
	import type { PageData } from './$types'
	import { ChevronDown, ChevronUp } from 'lucide-svelte'
	import { slide } from 'svelte/transition'

	export let data: PageData
	const { repo, readme } = data

	$: showReadme = false
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.0/github-markdown.min.css"
	/>
</svelte:head>

<div class="flex flex-col gap-4">
	<ProjectCard
		language={data.repo.language}
		name={data.repo.name}
		description={data.repo.description}
		topics={data.repo.topics}
	/>

	<div class="markdown-body rounded-lg">
		<button
			class="px-8 py-1 w-full flex items-center justify-between"
			on:click={() => (showReadme = !showReadme)}
		>
			{#if showReadme}
				<ChevronUp class="text-white" />
			{:else}
				<ChevronDown class="text-white" />
			{/if}
			<span>README.md</span>
			<ChevronDown class="text-white invisible" />
		</button>

		{#if showReadme}
			<div transition:slide class="p-8 pt-3">
				{@html readme}
			</div>
		{/if}
	</div>
</div>
