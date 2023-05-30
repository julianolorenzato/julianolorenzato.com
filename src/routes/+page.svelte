<script lang="ts">
	import me from '../lib/assets/me.png'
	import Hero from './Hero.svelte'
</script>

<section class="bg-neutral-300 border-y-2 border-stone-900 flex items-center justify-evenly">
	<Hero />
	<img src={me} class="w-[500px] border-stone-900 border-x-2" alt="Me" />
</section>

<section id="about" class="flex flex-col items-center py-12 px-[20%] gap-2">
	<h1 class="font-bold text-3xl bg-purple-500 w-full px-2 -skew-x-12">About me</h1>
	<p class="text-lg">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus tristique,
		rutrum sapien in, eleifend nisi. Donec mattis mauris massa, tincidunt aliquam tortor
		eleifend lacinia. Pellentesque a ipsum a enim placerat gravida. In ut massa tempor, vehicula
		metus eu, placerat leo. In mi diam, maximus at lorem et, aliquet viverra libero. Maecenas ac
		scelerisque augue. Morbi fringilla egestas ligula ac ornare. Mauris vel magna elit. Duis a
		nisl faucibus, pharetra velit ac, posuere risus. Pellentesque augue nulla, gravida et felis
		in, tempor gravida eros. Donec consectetur aliquet tellus id porttitor.
	</p>
</section>
