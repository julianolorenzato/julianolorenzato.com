<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte'
	import type { PageData } from './$types'
	import { Github } from 'lucide-svelte'

	export let data: PageData

	function style(language: string | null | undefined) {
		const backgrounds: Record<string, string> = {
			JavaScript: 'bg-[#f1e05a]',
			TypeScript: 'bg-[#3178c6]',
			Go: 'bg-[#00ADD8]',
			Elixir: 'bg-[#6e4a7e]',
			Rust: 'bg-[#dea584]',
			C: 'bg-[#555555]',
			Java: 'bg-[#b07219]',
			Kotlin: 'bg-[#A97BFF]',
			Zig: 'bg-[#ec915c]',
			Crystal: 'bg-[#000100]',
			PHP: 'bg-[#4F5D95]',
			Ruby: 'bg-[#701516]',
			Python: 'bg-[#3572A5]',
			Svelte: 'bg-[#ff3e00]'
		}

		return language && backgrounds[language] ? backgrounds[language] : 'border border-black'
	}
</script>

<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
	{#each data.repos as { language, name, description, topics }}
		<ProjectCard {language} {name} {description} {topics} />
	{/each}
</ul>
