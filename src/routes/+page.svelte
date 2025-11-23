<script lang="ts">
	let { data } = $props();
	$inspect(data.pageLinks);
</script>

<main class="min-h-screen w-screen flex items-end justify-end">
	<ul>
		{#each data.pageLinks as link}
			<li>
				<a href={link.href} class="text-5xl cursor-pointer">{link.label}</a>
			</li>
		{/each}
	</ul>
</main>
