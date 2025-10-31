<script>
	import Background from "$lib/Background.svelte";
	import { onMount } from 'svelte';

	const skills = {
		"Languages & Tools": [
			"Python", "Java", "JavaScript (React, Node.js)", "SQL", "HTML", "CSS", "Git", "GitHub", "REST APIs", "JSON"
		],
		"Application & Web Development": [
			"Full-stack web development", "Component-based frontend (React, Angular)", "Backend frameworks (Node.js, Flask, Spring Boot)",
			"API design and integration", "UI design", "Cloud-native applications"
		],
		"Software Engineering & DevOps": [
			"Computer Science fundamentals (OOP, Data Structures & Algorithms)", "Clean code practices",
			"Testing frameworks (JUnit, PyTest, Playwright)", "Agile & Scrum methodologies", "Problem-solving and debugging",
			"Version control & collaboration (Git/GitHub)", "PostgreSQL", "MongoDB", "CI/CD Pipelines (GitHub Actions, Jenkins)",
			"Cloud Platforms (AWS, GCP)", "Containerization (Docker)", "Performance Optimization"
		]
	};

	let visibleSkills = {};
	let skillRefs = {};

	function revealSkill(category, skillIndex) {
		if (!visibleSkills[category]) visibleSkills[category] = [];
		if (!visibleSkills[category].includes(skillIndex)) {
			visibleSkills[category] = [...visibleSkills[category], skillIndex];
			visibleSkills = visibleSkills; // trigger reactivity
		}
	}

	onMount(() => {
		let delay = 0;
		Object.keys(skills).forEach(category => {
			skills[category].forEach((skill, index) => {
				setTimeout(() => revealSkill(category, index), delay);
				delay += 200;
			});
		});
	});
</script>

<svelte:head>
	<title>Skills - Harsh Peshwani</title>
	<meta name="description" content="Explore my technical skills and expertise." />
</svelte:head>

<Background />

<!-- Main Content -->
<div class="relative z-10 min-h-screen text-white flex flex-col justify-center items-center px-6 py-20">
	<div class="max-w-7xl mx-auto w-full">
		<!-- Title -->
		<div class="text-center mb-16">
			<h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
				Skills
			</h1>
			<p class="text-lg text-neutral-400 max-w-2xl mx-auto">
				A comprehensive overview of my technical expertise and capabilities
			</p>
		</div>

		<!-- Skills Categories -->
		<div class="space-y-12">
			{#each Object.entries(skills) as [category, skillList], categoryIndex}
				<div class="group">
					<h2 class="text-2xl md:text-3xl font-semibold mb-8 text-neutral-100 border-b border-neutral-800 pb-4 group-hover:text-blue-300 transition-colors duration-300">
						{category}
					</h2>

					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{#each skillList as skill, skillIndex}
							<div
								class="skill-item p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transform opacity-0 animate-fade-in"
								style="animation-delay: {skillIndex * 0.1}s"
							>
								<div class="flex items-center space-x-3">
									<div class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
									<span class="text-neutral-300 hover:text-blue-300 transition-colors duration-300 text-sm md:text-base">
										{skill}
									</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.skill-item {
		animation: fade-in 0.6s ease-out forwards;
	}

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
</style>
