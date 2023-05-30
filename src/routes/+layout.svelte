<script lang="ts">
	import '../app.css'
</script>

<nav class="py-2 bg-purple-500">
	<ul class="flex gap-4 justify-center">
		<li>GitHub</li>
		<li>LinkedIn</li>
	</ul>
</nav>
<!-- <header class="h-8" /> -->

<slot />

<style>
	header, nav {
		background: rgb(146, 62, 255);
		background: linear-gradient(
			45deg,
			rgba(146, 62, 255, 1) 0%,
			rgba(213, 0, 255, 1) 34%,
			rgba(255, 10, 180, 1) 66%,
			rgba(255, 65, 98, 1) 100%
		);
	}
</style>
