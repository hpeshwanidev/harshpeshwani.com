<script>
	import Background from '$lib/Background.svelte';
	// Experience data
	export let experiences = [
	  {
		company: "SOTI Inc.",
		role: "Software QA Developer Intern",
		duration: "Sept 2025 – Present",
		location: "Mississauga, ON",
		type: "Hybrid",
		description:
		  "Worked on manual and automated testing using Playwright, collaborated with dev teams to ensure product quality, and contributed to automation scripts.",
		tech: ["Java", "JUnit", "JIRA", "Agile", "Playwright", "Git/Github", "Jenkins", "Javascript", "C#/.NET"],
		highlights: [
		  "Developed automated test scripts that reduced manual testing time by 30%.",
		  "Collaborated with cross-functional teams to identify and resolve bugs before release."
		]
	  },
	  {
		company: "Freelance Project",
		role: "Full Stack Developer",
		duration: "Jan 2024 – Apr 2024",
		location: "Remote",
		type: "Remote",
		description:
		  "Built a restaurant booking and waitlist management system using React, Node.js, and PostgreSQL with real-time updates.",
		tech: ["React", "Node.js", "PostgreSQL", "Docker"],
		highlights: [
		  "Implemented real-time notifications using WebSockets.",
		  "Deployed the application using Docker for scalability."
		]
	  },
	  {
		company: "Portfolio Project",
		role: "Frontend Developer",
		duration: "May 2024 – Present",
		location: "Remote",
		type: "Remote",
		description:
		  "Developing a unified QA record management dashboard using React and MongoDB, supporting 140+ daily, weekly, and monthly reports.",
		tech: ["React", "MongoDB", "Express", "TailwindCSS"],
		highlights: [
		  "Built responsive UI components with TailwindCSS.",
		  "Integrated with MongoDB for efficient data handling."
		]
	  }
	];
</script>
<Background />
<div class="page-root w-full flex flex-col" style="position: static; min-height: 60vh; margin-top: 100px;">


	<div class="flex flex-col items-center justify-center gap-8 mb-5 px-4">
		<div class="page-root text-center" sytle="position: relative; hieght: 10vh; ">
			<h1 class="text-5xl md:text-6xl font-extrabold text-white mb-3 ">
				Work Experience
			</h1>
			<p class="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
				A timeline of my professional journey and key achievements.
			</p>
		</div>

		<!-- Timeline Container -->
		<div class="w-full max-w-screen-xl mx-auto">
			<!-- Timeline Line -->
			<div class="relative">
				<div class="absolute left-[20px] md:left-[50px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-transparent transform -translate-x-1/2"></div>
				{#each experiences as exp, i}
				<div class="relative group mb-8">
				  <div class="absolute left-[20px] md:left-[50px] w-5 h-5 rounded-full bg-neutral-950 border-2 border-neutral-800 transition-colors duration-300 group-hover:border-blue-400 transform -translate-x-1/2"></div>					<div class="ml-12 md:ml-20 w-[100%] md:w-[80%] lg:w-[100%]">
					<div class="bg-gradient-to-br from-slate-800/90 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-3xl border border-slate-700/40 overflow-hidden w-full shadow-2xl shadow-black/30 p-8 sm:p-10 md:p-12 transition-transform duration-300 hover:scale-[1.01]">
					<div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"></div>
							<div class="p-4 sm:p-6 border-b border-slate-700/60 relative z-10">
								<div class="block sm:hidden">
									<div class="flex items-center gap-3 mb-3">
										<div class="w-12 h-12 flex items-center justify-center overflow-hidden flex-shrink-0 bg-slate-700 rounded-full">
											<span class="text-white font-bold">{exp.company.charAt(0)}</span>
										</div>
										<h3 class="text-base font-bold text-white line-clamp-2 flex-1">{exp.role}</h3>
									</div>
									<div class="flex items-center gap-2 text-slate-300 mb-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-3 h-3 flex-shrink-0 text-slate-400" aria-hidden="true">
											<path d="M15 3h6v6"></path>
											<path d="M10 14 21 3"></path>
											<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										</svg>
										<a href={exp.company === "SOTI Inc." ? "https://www.soti.net/" : "#"} target="_blank" rel="noopener noreferrer" class="font-medium text-xs truncate hover:text-white transition-colors duration-200 hover:underline underline-offset-2">{exp.company}</a>
									</div>
									<div class="flex items-center gap-3 text-gray-100 text-xs mb-2">
										<div class="flex items-center gap-1 text-gray-100">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-3 h-3 flex-shrink-0 text-gray-100" aria-hidden="true">
												<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
												<circle cx="12" cy="10" r="3"></circle>
											</svg>
											<span>{exp.location}</span>
										</div>
									</div>
									<div class="flex items-center gap-1 text-gray-100 text-xs">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-3 h-3 flex-shrink-0" aria-hidden="true">
											<path d="M8 2v4"></path>
											<path d="M16 2v4"></path>
											<rect width="18" height="18" x="3" y="4" rx="2"></rect>
											<path d="M3 10h18"></path>
										</svg>
										<span>{exp.duration}</span>
									</div>
								</div>
								<div class="hidden sm:block">
									<div class="flex items-start justify-between mb-4">
										<div class="flex items-center gap-4 flex-1 min-w-0">
											<div class="w-16 h-16 flex items-center justify-center overflow-hidden flex-shrink-0 bg-slate-700 rounded-full">
												<span class="text-white font-bold text-xl">{exp.company.charAt(0)}</span>
											</div>
											<div class="min-w-0 flex-1">
												<h3 class="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">{exp.role}</h3>
												<div class="flex items-center gap-2 text-slate-300">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4 flex-shrink-0" aria-hidden="true">
														<path d="M15 3h6v6"></path>
														<path d="M10 14 21 3"></path>
														<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
													</svg>
													<a href={exp.company === "SOTI Inc." ? "https://www.soti.net/" : "#"} target="_blank" rel="noopener noreferrer" class="font-medium text-sm truncate hover:text-white transition-colors duration-200 hover:underline underline-offset-2">{exp.company}</a>
												</div>
											</div>
										</div>
									</div>
									<div class="flex items-center justify-between text-gray-100 text-sm">
										<div class="flex items-center gap-4 flex-1 min-w-0">
											<div class="flex items-center gap-1">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 flex-shrink-0" aria-hidden="true">
													<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
													<circle cx="12" cy="10" r="3"></circle>
												</svg>
												<span class="truncate">{exp.location}</span>
											</div>
											<div class="flex items-center gap-1 text-gray-100">
												<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-4 h-4 flex-shrink-0">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
												</svg>
												<span class="truncate">{exp.type}</span>
											</div>
										</div>
										<div class="flex items-center gap-2 ml-4 flex-shrink-0 bg-slate-700/30 px-3 py-1 rounded-full">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 text-gray-100" aria-hidden="true">
												<path d="M8 2v4"></path>
												<path d="M16 2v4"></path>
												<rect width="18" height="18" x="3" y="4" rx="2"></rect>
												<path d="M3 10h18"></path>
											</svg>
											<span class="text-sm font-medium">{exp.duration}</span>
										</div>
									</div>
								</div>
							</div>
							<div class="grid grid-cols-1 lg:grid-cols-1 gap-8 p-6 relative z-10">
								<div class="space-y-6">
									<div class="flex items-center gap-1 mb-6">
										<h4 class="text-lg font-semibold text-gray-100">Key Highlights</h4>
										<div class="flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
									</div>
									<div class="space-y-4 mb-8 text-gray-100">
										{#each exp.highlights as highlight}
										<div class="flex items-start gap-3 group/highlight hover:translate-x-1 transition-transform duration-200">
											<div class="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
											<p class="text-sm leading-relaxed text-gray-100 group-hover/highlight:text-gray-50 transition-colors duration-200">{highlight}</p>
										</div>
										{/each}
									</div>
									<div>
										<h5 class="text-sm font-medium text-slate-300 mb-3">Technologies &amp; Skills</h5>
										<div class="flex flex-wrap gap-2">
											{#each exp.tech as tech}
											<span class="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-slate-700/60 to-slate-800/60 text-slate-200 border border-slate-600/50" style="animation-delay: {exp.tech.indexOf(tech) * 0.05}s;">{tech}</span>
											{/each}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
