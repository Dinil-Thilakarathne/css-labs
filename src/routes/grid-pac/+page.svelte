<script lang="ts">
	const data = [
		{
			src: '/img1.png',
			alt: 'Image 1',
			className: 'left-top'
		},
		{
			src: '/img2.png',
			alt: 'Image 2',
			className: 'left-down'
		},
		{
			src: '/img3.png',
			alt: 'Image 3',
			className: 'right-top'
		},
		{
			src: '/img4.png',
			alt: 'Image 4',
			className: 'right-down'
		}
	];
</script>

<div class="min-h-screen w-full">
	<div class="container">
		<div class="header"></div>
		<div class="logo"></div>
		{#each data as item}
			<img src={item.src} alt={item.alt} class="h-full w-full object-fill {item.className}" />
		{/each}
	</div>
</div>
