<script>
	import '../app.css';
	import '@fontsource/inter';
	import '@fontsource/inter/300.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';

	//import Social from '$lib/Social.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>


<div class="relative flex flex-col min-h-screen justify-center dark:text-white">
	<div
		class="flex flex-col w-4/5 md:max-w-2xl justify-center m-auto leading-relaxed space-y-3"
	>
		<slot />
	</div>

</div>
