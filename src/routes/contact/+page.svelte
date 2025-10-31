<script>
	import Background from '$lib/Background.svelte';
</script>

<svelte:head>
	<title>Contact - Harsh Peshwani</title>
	<meta name="description" content="Get in touch with Harsh Peshwani for collaborations, opportunities, and discussions." />
</svelte:head>

<Background />

<!-- Main Content -->
<div class="relative z-10 text-center px-6 sm:px-8 md:px-0 max-w-md w-full space-y-8 mx-auto flex flex-col justify-center items-center h-screen">
	<!-- Animated Heading -->
	<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 animate-gradient-x">
		Let's build something together!
	</h1>

	<!-- Name -->
	<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
		Harsh Peshwani
	</h2>

	<!-- Social Links -->
	<div class="flex items-center space-x-6">
		<a href="https://linkedin.com/in/harshpeshwani" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="hover:text-blue-500 transition-colors duration-300">
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin" aria-hidden="true">
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
				<rect width="4" height="12" x="2" y="9"></rect>
				<circle cx="4" cy="4" r="2"></circle>
			</svg>
		</a>
		<a href="mailto:hpeshwani.dev@gmail.com" aria-label="Email" class="hover:text-blue-500 transition-colors duration-300">
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail" aria-hidden="true">
				<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
				<rect x="2" y="4" width="20" height="16" rx="2"></rect>
			</svg>
		</a>
		<a href="https://github.com/hpeshwanidev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="hover:text-blue-500 transition-colors duration-300">
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" aria-hidden="true">
				<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
				<path d="M9 18c-4.51 2-5-2-7-2"></path>
			</svg>
		</a>
	</div>

	<!-- Chat with me button -->
	<a
		href="#"
		class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-blue-500/25 no-underline"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
			<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
		</svg>
		Chat with me
	</a>

	<!-- Quote -->
	<div class="mt-12 max-w-lg mx-auto">
		<blockquote class="text-lg text-neutral-400 italic">
			"Code is poetry written in logic, and every great project begins with a conversation."
		</blockquote>
	</div>
</div>

<style>
	@keyframes gradient-x {
		0%, 100% {
			background-size: 200% 200%;
			background-position: left center;
		}
		50% {
			background-size: 200% 200%;
			background-position: right center;
		}
	}
	.animate-gradient-x {
		animation: gradient-x 3s ease infinite;
		background-size: 200% 200%;
	}
</style>
