<script lang="ts">
	import { page } from '$app/stores'
	import ProjectCard from '$lib/components/ProjectCard.svelte'
	import type { PageData } from './$types'
	import { ChevronLeft } from 'lucide-svelte'

	export let data: PageData
	const { readme, repos } = data

	const repo = repos.find(r => r.name == $page.params.name)

	if (!repo) {
		throw new Error()
	}
</script>

<svelte:head>
	<title>{repo.name} | Juliano Lorenzato</title>

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.0/github-markdown.min.css"
	/>
</svelte:head>

<div class="flex flex-col gap-4">
	<div class="flex items-center justify-normal">
		<a href="/#my-projects" class="flex flex-col items-center pr-4 hover:underline">
			<ChevronLeft />
			<span class="col-span-2">Back</span>
		</a>
		<ProjectCard
			language={repo.language}
			name={repo.name}
			description={repo.description}
			topics={repo.topics}
			showReadme={false}
		/>
	</div>

	<div class="markdown-body rounded-lg">
		<div class="px-8 py-1 w-full flex items-center justify-center">
			<span>README.md</span>
		</div>

		<div class="p-8 pt-3">
			{@html readme}
		</div>
	</div>
</div>
