<script>
	import Back2 from "$lib/Back2.svelte";

	let messages = [];
	let input = "";
	let loading = false;

	async function sendMessage() {
		if (!input.trim()) return;

		messages = [...messages, { role: "user", text: input }];
		const userMessage = input;
		input = "";
		loading = true;

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: userMessage })
			});

			const data = await res.json();
			if (data.reply) {
				messages = [...messages, { role: "assistant", text: data.reply }];
			}
		} catch (err) {
			console.error("Error:", err);
			messages = [
				...messages,
				{
					role: "assistant",
					text: "⚠️ Unable to reach the chat service. Please try again later."
				}
			];
		}
		loading = false;
	}
</script>

<svelte:head>
	<title>Harsh Peshwani</title>
	<meta name="description" content="Chat with Harsh Peshwani about software development, projects, and more." />
</svelte:head>

<Back2 />

<div class="h-screen w-full bg-gray-950 relative overflow-hidden">
	<div class="relative z-10 h-full flex flex-col">
		<!-- HEADER -->
		<header class="flex-shrink-1 px-4 py-4 sm:px-4">
			<div class="flex items-center mb-3">
				<a href="/" class="no-underline flex items-center gap-2 px-3 py-2 bg-gray-800/60 hover:bg-gray-700/60 backdrop-blur-sm rounded-xl transition-all duration-200 text-gray-300 hover:text-white border border-gray-700/30">
					<svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" class="w-4 h-4">
						<path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
					</svg>
					<span class="text-sm font-medium">Home</span>
				</a>
			</div>

			<div class="flex justify-center">
				<div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 max-w-4xl">
					<div class="relative flex-shrink-0">
						<div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-slate-500/30 shadow-2xl overflow-hidden">
							<img alt="Harsh Peshwani" src="/bitmoji.png" class="object-cover rounded-full w-full h-full" />
						</div>
						<div class="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-gray-950 flex items-center justify-center">
							<div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
						</div>
					</div>

					<div class="text-center sm:text-left flex-1">
						<h1 class="text-2xl sm:text-3xl font-bold text-white mb-2">HARSH PESHWANI</h1>
						<p class="text-gray-300 text-base sm:text-lg mb-2">Digital Clone of Harsh Peshwani</p>
						<p class="text-gray-400 text-sm mb-4 max-w-md mx-auto sm:mx-0">
							Ask me about software development, my projects, experience, or how I can help your team succeed.
						</p>
						<div class="flex justify-center sm:justify-start gap-4">
							<a href="https://linkedin.com/in/harshpeshwani" target="_blank" class="p-2 bg-gray-800/40 hover:bg-blue-600/20 rounded-xl transition-all duration-200 text-gray-400 hover:text-blue-400 border border-gray-700/30">
								<svg viewBox="0 0 448 512" class="w-4 h-4" fill="currentColor">
									<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
								</svg>
							</a>
							<a href="https://github.com/hpeshwanidev" target="_blank" class="p-2 bg-gray-800/40 hover:bg-purple-600/20 rounded-xl transition-all duration-200 text-gray-400 hover:text-purple-400 border border-gray-700/30">
								<svg viewBox="0 0 496 512" class="w-4 h-4" fill="currentColor">
									<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
								</svg>
							</a>
							<a href="mailto:hpeshwani.dev@gmail.com" class="p-2 bg-gray-800/40 hover:bg-emerald-600/20 rounded-xl transition-all duration-200 text-gray-400 hover:text-emerald-400 border border-gray-700/30">
								<svg viewBox="0 0 512 512" class="w-4 h-4" fill="currentColor">
									<path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- CHAT BODY -->
		<main class="flex-1 px-4 sm:px-6 pb-4 flex flex-col min-h-0 items-center">
			<div class="flex-1 w-full max-w-2xl lg:max-w-3xl bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/30 shadow-2xl flex flex-col overflow-hidden justify-between h-[60vh]">

		<!-- Messages -->
		<div class="overflow-y-auto px-6 py-8 space-y-4 flex-1">
			{#if messages.length === 0}
				<div class="flex flex-col items-center justify-center h-full text-center px-4">
					<div class="w-16 h-16 mb-4 bg-gray-800/40 rounded-full flex items-center justify-center">
						<div class="w-16 h- text-gray-400">
							<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
							</svg>
						</div>
					</div>
					<h3 class="text-xl font-semibold text-white mb-2">Start a conversation</h3>
					<p class="text-gray-400 max-w-lg text-sm leading-relaxed">
						Ask me about my technical skills, past projects, career journey, or how I might contribute to your team.
					</p>
				</div>
			{:else}
				{#each messages as msg}
					<div class={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
						<div class={`px-4 py-2 rounded-2xl max-w-[80%] text-sm ${
							msg.role === "user"
								? "bg-blue-600 text-white"
								: "bg-gray-800/60 text-gray-200"
						}`}>
							{msg.text}
						</div>
					</div>
				{/each}
				{#if loading}
					<div class="flex justify-start">
						<div class="px-4 py-2 bg-gray-800/50 text-gray-400 rounded-2xl text-sm animate-pulse">
							Thinking...
						</div>
					</div>
				{/if}
			{/if}
		</div>

		<!-- Input -->
		<div class="flex-shrink-0 p-4 border-t border-gray-700/40 bg-gray-900/30 backdrop-blur-sm">
			<form on:submit|preventDefault={sendMessage} class="flex gap-3 items-center">
				<textarea
					bind:value={input}
					placeholder="Type your message..."
					rows="1"
					class="w-full bg-gray-800/50 border border-gray-600/40 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none text-sm backdrop-blur-sm"
				></textarea>

				<button
					type="submit"
					class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg"
					disabled={loading}
				>
					<svg viewBox="0 0 512 512" class="w-4 h-4 text-white" fill="currentColor">
						<path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
					</svg>
				</button>
			</form>
		</div>
	</div>
		</main>


		<!-- FOOTER -->
		<footer class="flex-shrink-0 px-4 sm:px-6 py-3">
			<p class="text-center text-gray-500 text-xs">© 2025 Harsh Peshwani • AI responses may be outdated or incorrect </p>
		</footer>
	</div>
</div>

<style>
	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-thumb {
		background: rgba(100, 116, 139, 0.4);
		border-radius: 3px;
	}
</style>
