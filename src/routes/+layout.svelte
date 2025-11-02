<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>CSS Labs</title>
	<meta name="description" content="CSS experiments and demonstrations" />
</svelte:head>

{@render children()}
