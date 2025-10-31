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
		position: absolute;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		background: #030712;
	}

	:global(.dark) .bg-root {
		background: #030712;
	}
</style>
