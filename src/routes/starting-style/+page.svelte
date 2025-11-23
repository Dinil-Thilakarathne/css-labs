<script lang="ts">
	let isOpen = $state(false);
</script>

<main
	class="relative flex min-h-screen w-full flex-col items-center justify-center bg-neutral-950 text-neutral-50"
>
	<div class="z-10 flex flex-col items-center gap-6">
		<h1 class="text-3xl font-light tracking-tight text-neutral-200">Starting Style Demo</h1>

		<button
			onclick={() => (isOpen = true)}
			class=" cursor-pointer rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition-transform active:scale-95 hover:bg-neutral-200"
		>
			{isOpen ? 'Close' : 'Open'} Card
		</button>
	</div>

	<div class="card" class:open={isOpen}>
		<div class="h-full w-full p-8 flex flex-col justify-between">
			<div>
				<h2 class="text-2xl font-medium mb-2">Hello World</h2>
				<p class="text-neutral-400 leading-relaxed">
					This card animates in using <code class="bg-neutral-800 px-1 py-0.5 rounded text-xs"
						>@starting-style</code
					>
					and animates out using
					<code class="bg-neutral-800 px-1 py-0.5 rounded text-xs">allow-discrete</code>.
				</p>
			</div>
			<div class="flex gap-3">
				<button
					class=" cursor-pointer flex-1 rounded-md bg-white/10 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
					onclick={() => (isOpen = false)}
				>
					Cancel
				</button>
				<button
					class=" cursor-pointer flex-1 rounded-md bg-white text-black py-2 text-sm font-medium hover:bg-neutral-200 transition-colors"
					onclick={() => (isOpen = false)}
				>
					Confirm
				</button>
			</div>
		</div>
	</div>
</main>

<style>
	.card {
		/* 1. Start with display: none so it's removed from the DOM layout */
		display: none;

		/* Positioning and basic st yling */
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 320px;
		height: 400px;
		background: #171717; /* neutral-900 */
		border: 1px solid #262626; /* neutral-800 */
		border-radius: 24px;
		z-index: 10;
		box-shadow:
			0 0 0 1px rgba(0, 0, 0, 0.5),
			0 20px 50px -10px rgba(0, 0, 0, 0.5);

		/* 
			2. Define the 'exit' state (hidden state).
			When the class .open is removed, it reverts to these styles.
		*/
		opacity: 0;
		translate: 0 20px; /* Moves down slightly */
		scale: 0.8;

		transition:
			opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
			translate 0.4s cubic-bezier(0.16, 1, 0.3, 1),
			scale 0.4s cubic-bezier(0.17, 2.2, 0.84, 0.96),
			display 0.4s allow-discrete; /* Important! */
	}

	.card.open {
		/* 4. The 'open' state */
		display: block;
		opacity: 1;
		translate: 0 0;
		scale: 1;

		/* 
			5. @starting-style defines the styles *immediately* when the element 
			is first rendered (switched from display: none to display: block).
			This allows the browser to interpolate from these values to the .open values.
		*/
		@starting-style {
			opacity: 0.4;
			translate: 0 20px;
			scale: 0.8;
		}
	}
</style>
