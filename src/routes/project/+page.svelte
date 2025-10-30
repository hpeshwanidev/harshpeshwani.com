<script>
	import Background from "$lib/Background.svelte";
	import { onMount } from 'svelte';

	const projects = [
		{
			title: 'TableLink – Restaurant Booking System',
			description:
				'A full-stack platform enabling real-time table reservations, waitlist management, and notifications for restaurants.',
			tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
			link: 'https://github.com/harshpeshwani/TableLink'
		},
		{
			title: 'QA Tracker – Quality Assurance Dashboard',
			description:
				'An interactive web app for tracking QA records (daily, weekly, monthly) with form automation and analytics.',
			tags: ['SvelteKit', 'MongoDB', 'Express', 'Playwright'],
			link: 'https://github.com/harshpeshwani/QA-Tracker'
		},
		{
			title: 'Portfolio Website – Personal Showcase',
			description:
				'A modern, interactive portfolio built with SvelteKit featuring dynamic backgrounds, smooth animations, and responsive design.',
			tags: ['SvelteKit', 'Tailwind CSS', 'JavaScript', 'Vite'],
			link: 'https://github.com/harshpeshwani/portfolio'
		},
		{
			title: 'E-Commerce Platform – Online Store',
			description:
				'A scalable e-commerce solution with user authentication, payment integration, and inventory management.',
			tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
			link: 'https://github.com/harshpeshwani/ecommerce'
		}
	];

	const taglines = [
		"Turning ideas into impactful code.",
		"Where creativity meets clean code.",
		"Building projects that make a difference.",
		"Code. Create. Innovate.",
		"Transforming vision into digital reality.",
		"Every line of code tells a story.",
		"Driven by curiosity. Built with purpose.",
		"Crafting modern solutions with passion.",
		"From concept to creation — one project at a time.",
		"Innovating today for a smarter tomorrow."
	];

	let currentTaglineIndex = 0;
	let displayText = '';
	let isDeleting = false;
	let lastTime = 0;
	let typingSpeed = 100;
	let erasingSpeed = 50;
	let pauseAfterTyping = 2000;
	let pauseAfterErasing = 500;
	let pauseStartTime = 0;
	let isPaused = false;

	function animateTagline(currentTime) {
		if (isPaused) {
			if (currentTime - pauseStartTime >= (isDeleting ? pauseAfterErasing : pauseAfterTyping)) {
				isPaused = false;
				if (isDeleting) {
					isDeleting = false;
					currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
				} else {
					isDeleting = true;
				}
			}
			requestAnimationFrame(animateTagline);
			return;
		}

		let currentTagline = taglines[currentTaglineIndex];
		let speed = isDeleting ? erasingSpeed : typingSpeed;

		if (currentTime - lastTime >= speed) {
			lastTime = currentTime;

			if (!isDeleting) {
				if (displayText.length < currentTagline.length) {
					displayText = currentTagline.slice(0, displayText.length + 1);
				} else {
					isPaused = true;
					pauseStartTime = currentTime;
				}
			} else {
				if (displayText.length > 0) {
					displayText = currentTagline.slice(0, displayText.length - 1);
				} else {
					isPaused = true;
					pauseStartTime = currentTime;
				}
			}
		}

		requestAnimationFrame(animateTagline);
	}

	onMount(() => {
		requestAnimationFrame(animateTagline);
	});
</script>

<svelte:head>
	<title>Projects - Harsh Peshwani</title>
	<meta name="description" content="Explore my featured projects and technical work." />
</svelte:head>

<Background />

<!-- Main Content -->
<div class="relative z-10 min-h-screen text-white flex flex-col justify-center items-center px-6 py-20">
	<div class="max-w-7xl mx-auto w-full">
		<!-- Title -->
		<div class="text-center mb-16">
			<h1 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
				Projects
			</h1>

			<!-- Typing animation -->
			<div class="font-mono text-lg flex items-center justify-center mt-4 h-8">
				<span class="text-lg text-blue-400 font-bold mr-2">></span>
				<span>{displayText}</span>
				<span class="border-r-2 border-blue-400 animate-blink ml-1" style="height: 1.4em;"></span>
			</div>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each projects as project, index}
				<div
					class="group p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transform"
				>
					<h2 class="text-xl font-semibold mb-4 text-neutral-100 group-hover:text-blue-300 transition-colors duration-300">
						{project.title}
					</h2>
					<p class="text-neutral-400 mb-6 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
						{project.description}
					</p>

					<div class="flex flex-wrap gap-3 mb-6">
						{#each project.tags as tag}
							<span class="px-4 py-2 text-xs font-medium rounded-full bg-neutral-800/70 text-blue-400 border border-neutral-700 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300">
								{tag}
							</span>
						{/each}
					</div>

					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-blue-300 rounded-lg transition-all duration-300 border border-blue-500/30 hover:border-blue-500/60 group-hover:shadow-lg group-hover:shadow-blue-500/20 no-underline"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
							<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
						</svg>
						<span>GitHub</span>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideInUp {
		from {
			opacity: 0;
			transform: translateY(50px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 1s ease-out;
	}
</style>
