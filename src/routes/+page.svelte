<script>
    let roles = [
        "Software Developer",
        "Software Developer Intern",
        "Software Enthusiast",
        "Tech Explorer",
        "Problem Solver",
        "Tech Innovator",
        "Code Craftsman",
        "AI Enthusiast",
        "Web Developer"
    ];
    let currentRoleIndex = 0;
    let displayText = '';
    let isDeleting = false;
    let typingSpeed = 80;
    let erasingSpeed = 40;
    let pauseAfterTyping = 900;
    let pauseAfterErasing = 300;

    function animateRole() {
        let currentRole = roles[currentRoleIndex];
        if (!isDeleting) {
            if (displayText.length < currentRole.length) {
                displayText = currentRole.slice(0, displayText.length + 1);
                setTimeout(animateRole, typingSpeed);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    animateRole();
                }, pauseAfterTyping);
            }
        } else {
            if (displayText.length > 0) {
                displayText = currentRole.slice(0, displayText.length - 1);
                setTimeout(animateRole, erasingSpeed);
            } else {
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                setTimeout(animateRole, pauseAfterErasing);
            }
        }
    }

    import { onMount } from 'svelte';
    onMount(animateRole);
</script>

<svelte:head>
    <title>Harsh Peshwani</title>
    <meta name="title" content="Hey There!" />
    <meta name="description" content="Welcome to Harsh Peshwani's portfolio." />
</svelte:head>

<!-- HERO CONTENT -->
<div class="relative z-10 text-center px-6 sm:px-8 md:px-0 max-w-md w-full space-y-8 mx-auto flex flex-col justify-center items-center min-h-screen">
    <!-- Name -->
    <h1 class="text-5xl sm:text-1xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Harsh Peshwani
    </h1>

    <!-- Typing animation with prompt symbol -->
    <div class="font-mono text-2xl flex items-center justify-center mt-2 h-10">
        <span class="text-lg text-blue-400 font-bold mr-2 animate-pulse">&gt;</span>
        <span>{displayText}</span>
        <span class="border-r-2 border-blue-400 animate-blink ml-1" style="height: 1.4em;"></span>
    </div>

    <!-- Chat with Me Button -->
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="/chat">
            <span class="inline-flex items-center px-6 py-3 bg-blue-600 text-gray-100 rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                <!-- Message/Chat SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle mr-2" aria-hidden="true">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                Chat with Me
            </span>
        </a>
    </div>

    <!-- Social Icons & Contact Row -->
    <div class="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0 text-gray-400 mt-4">
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/harshpeshwani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="hover:text-blue-500 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        </a>
        <!-- GitHub -->
        <a href="https://github.com/hpeshwanidev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="hover:text-blue-500 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
        </a>
        <!-- Email -->
        <a href="mailto:hpeshwani.dev@gmail.com" aria-label="Email" class="hover:text-blue-500 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
        </a>
    </div>
</div>

<!-- Down-arrow indicator at bottom, unchanged: -->
<div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-3xl opacity-70 cursor-pointer">
    <i class="fas fa-chevron-down"></i>
</div>



<!-- <nav class="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-lg border-b border-white/10 py-4">
	<div class="flex justify-center items-center space-x-10 text-white text-lg font-medium">
	  <a href="#chat" class="flex items-center space-x-2 hover:text-blue-400 transition">
		<i class="fa-regular fa-comments text-2xl"></i>
		<span>Chat</span>
	  </a>
	  <a href="#about" class="flex items-center space-x-2 hover:text-blue-400 transition">
		<i class="fa-regular fa-user text-2xl"></i>
		<span>About</span>
	  </a>
	  <a href="#work" class="flex items-center space-x-2 hover:text-blue-400 transition">
		<i class="fa-solid fa-briefcase text-2xl"></i>
		<span>Work</span>
	  </a>
	  <a href="#awards" class="flex items-center space-x-2 hover:text-blue-400 transition">
		<i class="fa-solid fa-trophy text-2xl"></i>
		<span>Awards</span>
	  </a>
	  <a href="#contact" class="flex items-center space-x-2 hover:text-blue-400 transition">
		<i class="fa-regular fa-envelope text-2xl"></i>
		<span>Contact</span>
	  </a>
	  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" class="flex items-center space-x-2 hover:text-blue-400 transition">
		<i class="fa-brands fa-linkedin-in text-2xl"></i>
		<span>LinkedIn</span>
	  </a>
	  <a href="https://github.com/" target="_blank" rel="noreferrer" class="flex items-center space-x-2 hover:text-blue-400 transition">
		<i class="fa-brands fa-github text-2xl"></i>
		<span>GitHub</span>
	  </a>
	</div>
  </nav> -->
  
  
	

  
  <!-- Down-arrow indicator at bottom, unchanged: -->
  
 
  <!-- Hero Section -->
<!-- <div id="home" class="flex flex-col justify-center items-center h-screen text-center">
    <h1 class="font-extrabold text-5xl md:text-6xl">I'm Harsh Peshwani</h1>
    <p class="text-xl md:text-2xl mt-4">
        <span>{roles[currentRoleIndex]}</span>
    </p>
</div> -->
<!-- At the very end of your page/layout: -->
<!-- <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-3xl opacity-70 cursor-pointer">
	<i class="fas fa-chevron-down"></i>
</div> -->
<style>
    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    .animate-blink {
        animation: blink 0.9s steps(1, end) infinite;
    }

    p span {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        border-right: 2px solid;
        animation: typing 2s steps(20, end), blink 0.5s step-end infinite;
    }
</style>