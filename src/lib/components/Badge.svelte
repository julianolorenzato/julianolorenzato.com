<script lang="ts">
	export let label: string
</script>

<div class="flex items-center text-brand-secondary gap-2 border-2 border-brand-secondary rounded-md py-0.5 px-1.5 shadow-xl">
	<div class="w-6">
		<slot />
	</div>
	<span>{label}</span>
</div>
