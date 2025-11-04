<script>
	import Background from "$lib/Background.svelte";
	import { fade, fly } from "svelte/transition";
	import { onMount } from "svelte";

	const skills = {
		"Languages & Tools": [
			"Python", "Java", "JavaScript (React, Node.js)", "SQL", "HTML", "CSS", "Git", "GitHub", "REST APIs", "JSON"
		],
		"Application & Web Development": [
			"Full-stack development", "Frontend (React, Angular)", "Backend (Node.js, Flask, Spring Boot)",
			"UI/UX Design", "API Integration", "Cloud-native apps"
		],
		"Software Engineering & DevOps": [
			"OOP / DSA / Clean Code", "Testing (JUnit, PyTest, Playwright)", "Agile & Scrum", "PostgreSQL / MongoDB",
			"CI/CD Pipelines", "AWS / GCP / Docker", "Performance Optimization"
		]
	};

	let mounted = false;
	let mouseX = 0;
	let mouseY = 0;
	let skillContainers = [];

	function handleMouseMove(event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	function calculateDistance(elem) {
		if (!elem) return Infinity;
		const rect = elem.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
		return distance;
	}

	function updateMagneticEffect() {
		skillContainers.forEach((elem, index) => {
			if (!elem) return;

			const distance = calculateDistance(elem);
			const maxDistance = 120; // Magnetic effect radius

			if (distance < maxDistance) {
				const strength = (maxDistance - distance) / maxDistance;
				const rect = elem.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;

				const deltaX = (mouseX - centerX) * strength * 0.2;
				const deltaY = (mouseY - centerY) * strength * 0.2;

				elem.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
				elem.style.boxShadow = `0 0 ${strength * 15}px rgba(59, 130, 246, ${strength * 0.6})`;
				elem.classList.add('magnetic-active');
			} else {
				elem.style.transform = 'translate(0px, 0px)';
				elem.style.boxShadow = 'none';
				elem.classList.remove('magnetic-active');
			}
		});

		requestAnimationFrame(updateMagneticEffect);
	}

	onMount(() => {
		mounted = true;
		document.addEventListener('mousemove', handleMouseMove);
		requestAnimationFrame(updateMagneticEffect);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<svelte:head>
	<title>Skills - Harsh Peshwani</title>
	<meta name="description" content="Discover my technical expertise and development journey." />
</svelte:head>

<Background />

<div class="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-24 text-white">
	<div class="max-w-6xl w-full">
		<!-- Title -->
		<div class="text-center mb-16">
			<h1
				class="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-700 to-gray-800 dark:from-blue-400 dark:to-cyan-400 text-transparent bg-clip-text flex items-center justify-center gap-3"
				in:fade={{ duration: 800 }}
			>
				<i class="fas fa-lightbulb text-gray-800 dark:text-white animate-pulse hover:animate-bounce cursor-pointer text-3xl md:text-4xl hover:text-yellow-300 transition-colors duration-300"></i>
				Skills
			</h1>
			<p class="text-gray-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto" in:fade={{ delay: 200, duration: 600 }}>
				Transforming concepts into impactful digital solutions
			</p>
		</div>

		<!-- Timeline-style layout -->
		<div class="relative border-l border-gray-300 dark:border-neutral-800 ml-4 space-y-16">
			{#each Object.entries(skills) as [category, list], i}
				<div class="relative pl-8" in:fly={{ y: 40, duration: 600, delay: i * 200 }}>
					<!-- Timeline dot -->
					<div class="timeline-dot absolute left-[-7px] top-2 w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 dark:from-blue-400 dark:to-cyan-400 rounded-full"></div>

					<!-- Category heading -->
					<h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-neutral-100">
						{category}
					</h2>

					<!-- Floating skill tags -->
					<div class="flex flex-wrap gap-3">
						{#each list as skill, j}
							<span
								bind:this={skillContainers[j + i * list.length]}
								class="skill-tag px-4 py-2 rounded-full bg-gradient-to-r from-gray-100/80 to-gray-200/60 dark:from-neutral-900/60 dark:to-neutral-800/40 backdrop-blur-md border border-gray-300 dark:border-neutral-700 text-gray-800 dark:text-neutral-300 text-sm md:text-base transition-all duration-300 hover:scale-105 hover:border-gray-400 dark:hover:border-blue-500/50 cursor-default relative overflow-hidden"
								in:fly={{ y: 20, duration: 400, delay: j * 80 }}
							>
								<span class="relative z-10">{skill}</span>
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.skill-tag {
		animation: floatIn 0.8s ease-out forwards;
		position: relative;
	}

	.skill-tag.magnetic-active {
		background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.1));
		border-color: rgba(59, 130, 246, 0.5);
	}

	.timeline-dot {
		animation: blink 2s infinite;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.timeline-dot:hover {
		transform: scale(1.5);
		box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
	}

	@keyframes blink {
		0%, 50%, 100% { opacity: 1; }
		25%, 75% { opacity: 0.3; }
	}

	@keyframes floatIn {
		from {
			opacity: 0;
			transform: translateY(15px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
