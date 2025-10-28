<script>
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	let innerWidth;
	let innerHeight;
	let mx = spring(0, { stiffness: 0.1, damping: 0.95 });
	let my = spring(0, { stiffness: 0.1, damping: 0.95 });

	function handleMousemove(event) {
		mx.set(innerWidth - event.clientX);
		my.set(innerHeight - event.clientY);
	}

	onMount(() => {
		// Optional: any initialization if needed
	});
</script>

<svelte:window on:mousemove={handleMousemove} bind:innerWidth bind:innerHeight />

<div class="bg-root" style="--mx: {$mx}px; --my: {$my}px;"></div>

<style>
	.bg-root {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		background: radial-gradient(
				circle at var(--mx) var(--my),
				rgb(241, 245, 249) 70%,
				transparent 125%
			),
			linear-gradient(to right, rgb(253, 186, 116), rgb(253, 164, 175));
	}

	:global(.dark) .bg-root {
		background: radial-gradient(circle at var(--mx) var(--my), #191919 70%, transparent 150%),
			linear-gradient(to right, #919bff, #133a94);
	}
</style>
