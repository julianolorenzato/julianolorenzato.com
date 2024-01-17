<script lang="ts">
	import { Github } from 'lucide-svelte'

	export let name: string
	export let language: string | null | undefined
	export let description: string | null
	export let topics: string[] = []
	export let showReadme: boolean

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

	function style(language: string | null | undefined) {
		return language && backgrounds[language] ? backgrounds[language] : 'border border-black'
	}
</script>

<li
	class="flex flex-col grow justify-between gap-3 bg-slate-100 border border-black p-4 rounded-lg"
>
	<div class="flex flex-col gap-2">
		<div class="h-2 rounded-full w-full {style(language)}" />

		<div class="flex items-center justify-between">
			<h3 class="text-lg">{name}</h3>

			<a
				target="_blank"
				href={`https://github.com/julianolorenzato/${name}`}
				class="px-2 rounded-full hover:bg-slate-950 hover:text-white"
			>
				<button class="text-sm flex items-center">
					<Github class="scale-75" />
					<span>See on GitHub</span>
				</button>
			</a>
		</div>

		<p class="text-slate-700">{description}</p>

		<div class="flex items-center gap-2 flex-wrap">
			{#if topics}
				{#each topics as topic}
					<span class="text-sm bg-slate-900 text-white rounded-md px-2">{topic}</span>
				{/each}
			{/if}
		</div>
	</div>

	{#if showReadme}
		<a
			href={`/${name}`}
			class="self-center p-2 rounded-lg border border-gray-400 sm:border-transparent hover:border-gray-400 transition-all"
			>Show README.md</a
		>
	{/if}
</li>
