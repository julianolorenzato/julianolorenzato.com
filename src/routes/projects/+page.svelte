<script lang="ts">
	import type { PageData } from "./$types"

    export let data: PageData
</script>

{#each data.repos as repo}
    <h1>{repo.name}</h1>
{/each}