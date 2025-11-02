<script lang="ts">
	import { siteNav } from '$lib/data';
</script>

<main class="flex min-h-screen w-full flex-col items-end justify-end px-1 py-12">
	<div>
		{#each siteNav as nav}
			<div class="w-full">
				<a
					href={nav.href}
					class="block w-full text-right font-helvetica-neue text-5xl font-semibold lg:text-8xl"
				>
					{nav.name}
				</a>
			</div>
		{/each}
	</div>
</main>
