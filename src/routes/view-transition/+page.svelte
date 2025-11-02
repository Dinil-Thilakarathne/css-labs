<script lang="ts">
	let activeIndex = $state(-1);
	let mainEle: HTMLElement;

	function handleOnclick(i: number) {
		if (mainEle) {
			// Run updateActiveItem() on its own if view transitions are not supported
			if (!document.startViewTransition) {
				activeIndex = activeIndex === i ? -1 : i;
			} else {
				// Run updateActiveItem() via startViewTransition()
				document.startViewTransition(() => {
					activeIndex = activeIndex === i ? -1 : i;
				});
			}
		}
	}
</script>

<main class="main" bind:this={mainEle}>
	<div class="match grid">
		{#each Array.from({ length: 4 }) as _, i}
			<button
				class="item item-{i + 1} match-div {activeIndex === i ? 'active' : ''}"
				onclick={() => handleOnclick(i)}
			>
				<span>Item {i + 1}</span>
			</button>
		{/each}
	</div>
</main>
