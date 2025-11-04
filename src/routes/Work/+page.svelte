<script>
	import Background from '$lib/Background.svelte';
	import sotiLogo from './soti.png';
	import QcLogo from './qualitycheese.png';
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
		  "Developed and maintained application features and backend services using Java, Python, REST APIs, and SQL, enhancing performance, automation, and reliability across platforms.",
		  "Collaborated with cross-functional Agile teams including developers, product managers, and UX to define requirements, and ensure high-quality, scalable software delivery."
		]
	  },
	  {
		company: "Quality Cheese Inc.",
		role: "Business System Engineer Intern",
		duration: "May 2025 – Aug 2025",
		location: "Vaughan, ON",
		type: "Remote",
		description:
		  "Built a restaurant booking and waitlist management system using React, Node.js, and PostgreSQL with real-time updates.",
		tech: ["Python","SQL", "Microsoft Office Suite"],
		highlights: [
		  "Collaborated with operations, finance, and production teams to gather requirements, optimize workflows, and align business system enhancements with reporting standards.",
		  "Designed and automated data validation scripts in SQL and Excel macros to ensure accuracy of inventory, production, and traceability records across ERP."
		]
	  }
	];
</script>
<Background />
<div class="page-root w-full flex flex-col" style="position: static; min-height: 60vh; margin-top: 100px;">


	<div class="flex flex-col items-center justify-center gap-12 mb-5 px--1">
		<div class="page-root text-center" sytle="position: relative; hieght: 10vh; ">
			<h1 class="text-5xl md:text-6xl font-extrabold text-gray-95 dark:text-gray-50" style="font-family: 'Poppins', sans-serif;">
				Work Experience
			</h1>
			
		</div>

		<!-- Timeline Container -->
		<div class="w-full max-w-screen-xl mx-auto">
			<!-- Timeline Line -->
			<div class="relative">
				<div class="absolute left-[20px] md:left-[20px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-transparent transform -translate-x-1/2"></div>
				{#each experiences as exp, i}
				<div class="relative group mb-8">
				  <div class="absolute left-[14px] md:left-[20px] w-5 h-5 rounded-full bg-neutral-950 border-2 border-neutral-800 transition-colors duration-300 group-hover:border-blue-400 transform -translate-x-1/2"></div>					<div class="ml-12 md:ml-12 w-[100%] md:w-[80%] lg:w-[110%]">
					<div class="bg-gradient-to-br from-slate-800/90 via-slate-800/60 to-slate-900/70 dark:from-slate-800/90 dark:via-slate-800/60 dark:to-slate-900/70   from-gray-100/95   via-gray-200/95   to-gray-300/95 backdrop-blur-md rounded-3xl border border-slate-700/40 dark:border-slate-700/40   border-gray-300/60 overflow-hidden w-full shadow-2xl shadow-black/30 dark:shadow-black/30   shadow-gray-400/20 p-4 sm:p-4 md:p-6 transition-transform duration-300 hover:scale-[1.01]">
					<div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/5 dark:via-transparent dark:to-purple-500/5   from-blue-500/10   via-transparent   to-purple-500/10 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"></div>
							<div class="p-2 sm:p-3 border-b border-slate-700/60 dark:border-slate-700/60 border-gray-300/60 relative z-8">
								<div class="block sm:hidden">
									<div class="flex items-center gap-3 mb-3">
											<div class="w-12 h-12 flex items-center justify-center overflow-hidden flex-shrink-0 bg-slate-700 rounded-full">
												{#if exp.company === "SOTI Inc."}
													<img src={sotiLogo} alt="SOTI Inc. Logo" class="w-full h-full object-cover rounded-full" />
												{:else}
													<span class=" text-gray-900 dark:text-white font-bold">{exp.company.charAt(0)}</span>
												{/if}
											</div>
										<h3 class="text-base font-bold  text-gray-900  line-clamp-2 flex-1">{exp.role}</h3>
									</div>
									<div class="flex items-center gap-2  text-gray-600 dark:text-slate-300 mb-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-3 h-3 flex-shrink-0 text-slate-400" aria-hidden="true">
											<path d="M15 3h6v6"></path>
											<path d="M10 14 21 3"></path>
											<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										</svg>
											<a href={exp.company === "SOTI Inc." ? "https://www.soti.net/" : "#"} target="_blank" rel="noopener noreferrer" class="font-medium text-xs truncate hover:text-white dark:hover:text-white   hover:text-gray-900 transition-colors duration-200 hover:underline underline-offset-2">{exp.company}</a>
									</div>
									<div class="flex items-center gap-3 text-gray-100 dark:text-gray-100   text-gray-700 text-xs mb-2">
										<div class="flex items-center gap-1 text-gray-100 dark:text-gray-100   text-gray-700">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-3 h-3 flex-shrink-0 text-gray-100 dark:text-gray-100   text-gray-700" aria-hidden="true">
												<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
												<circle cx="12" cy="10" r="3"></circle>
											</svg>
											<span>{exp.location}</span>
										</div>
									</div>
									<div class="flex items-center gap-1 text-gray-100 dark:text-gray-100   text-gray-700 text-xs">
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
											<div class="w-16 h-16 flex items-center justify-center overflow-hidden flex-shrink-0 bg-slate-700 dark:bg-slate-700   bg-gray-200 rounded-full">
												{#if exp.company === "SOTI Inc."}
													<img src={sotiLogo} alt="SOTI Inc. Logo" class="w-full h-full object-cover rounded-full" />
												{:else}
													<img src={QcLogo} alt="SOTI Inc. Logo" class="w-full h-full object-cover rounded-full" />
												{/if}
											</div>
											<div class="min-w-0 flex-1">
												<h3 class="text-xl md:text-2xl font-bold text-white dark:text-white   text-gray-700 mb-2 line-clamp-2">{exp.role}</h3>
												<div class="flex items-center gap-2 text-slate-300 dark:text-slate-300   text-gray-600">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4 flex-shrink-0" aria-hidden="true">
														<path d="M15 3h6v6"></path>
														<path d="M10 14 21 3"></path>
														<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
													</svg>
													<a href={exp.company === "SOTI Inc." ? "https://www.soti.net/" : "#"} target="_blank" rel="noopener noreferrer" class="font-medium text-sm truncate hover:text-white dark:hover:text-white   hover:text-gray-900 transition-colors duration-200 hover:underline underline-offset-2">{exp.company}</a>
												</div>
											</div>
										</div>
									</div>
									<div class="flex items-center justify-between text-gray-100 dark:text-gray-100   text-gray-700 text-sm">
										<div class="flex items-center gap-4 flex-1 min-w-0">
											<div class="flex items-center gap-1">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 flex-shrink-0" aria-hidden="true">
													<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
													<circle cx="12" cy="10" r="3"></circle>
												</svg>
												<span class="truncate">{exp.location}</span>
											</div>
											<div class="flex items-center gap-1 text-gray-100 dark:text-gray-100   text-gray-700">
												<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-4 h-4 flex-shrink-0">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
												</svg>
												<span class="truncate">{exp.type}</span>
											</div>
										</div>
										<div class="flex items-center gap-2 ml-4 flex-shrink-0 bg-slate-700/30 dark:bg-slate-700/30   bg-gray-200/60 px-3 py-1 rounded-full">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 text-gray-100 dark:text-gray-100   text-gray-700" aria-hidden="true">
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
										<h4 class="text-lg font-semibold text-gray-100 dark:text-gray-100   text-gray-900">Key Highlights</h4>
										<div class="flex-1 h-px bg-gradient-to-r from-slate-600 dark:from-slate-600   from-gray-400 to-transparent"></div>
									</div>
									<div class="space-y-4 mb-8 text-gray-100 dark:text-gray-100">
										{#each exp.highlights as highlight}
										<div class="flex items-start gap-3 group/highlight hover:translate-x-1 transition-transform duration-200">
											<div class="w-2 h-2 bg-slate-400 dark:bg-slate-400   bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
											<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-100   text-gray-700 group-hover/high  text-gray-50 dark:group-hover/high  text-gray-50   group-hover/high  text-gray-900 transition-colors duration-200">{highlight}</p>
										</div>
										{/each}
									</div>
									<div>
										<h5 class="text-sm font-medium text-slate-300 dark:text-slate-300   text-gray-600 mb-3">Technologies &amp; Skills</h5>
										<div class="flex flex-wrap gap-2">
											{#each exp.tech as tech}
											<span class="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-slate-700/60 to-slate-800/60 dark:from-slate-700/60 dark:to-slate-800/60   from-gray-200/80   to-gray-300/80 text-slate-200 dark:text-slate-200   text-gray-800 border border-slate-600/50 dark:border-slate-600/50   border-gray-400/50" style="animation-delay: {exp.tech.indexOf(tech) * 0.05}s;">{tech}</span>
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
