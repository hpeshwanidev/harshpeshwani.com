<script>
	import '../app.css';
	import '@fontsource/inter';
	import '@fontsource/inter/300.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';

	import Social from '$lib/Social.svelte';
	import { spring } from 'svelte/motion';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
	let innerWidth;
	let innerHeight;
	let mx = spring(0, { stiffness: 0.1, damping: 0.95 });
	let my = spring(0, { stiffness: 0.1, damping: 0.95 });
	function handleMousemove(event) {
		mx.set(innerWidth - event.clientX);
		my.set(innerHeight - event.clientY);
	}

	import { browser } from '$app/environment';

	let darkMode = false;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<svelte:window on:mousemove={handleMousemove} bind:innerWidth bind:innerHeight />
<div
	class="relative flex flex-col min-h-screen justify-center bg-grad dark:bg-grad-dark dark:text-white"
	style="--mx: {$mx}px; --my: {$my}px;"
>

<Social class="flex flex-col w-4/5 md:max-w-2xl justify-center m-auto py-12 leading-relaxed space-y-3"/>

	<div
		class="flex flex-col w-4/5 md:max-w-2xl justify-center m-auto leading-relaxed space-y-3"
	>
		<slot />
	</div>

</div>
