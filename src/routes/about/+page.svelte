<script>
    let greetings = [
    "Hello",
    "Bonjour",
    "नमस्ते",
    "Hola",
    "Ciao",
    "Hallo",
    "Olá",
    "こんにちは",
    "안녕하세요",
    "你好",
    "سلام"
    ];
    let currentGreetingIndex = 0;
    let displayGreeting = greetings[0];
    let greetingClass = 'fade-in';

    function rotateGreeting() {
        greetingClass = 'fade-out-up';
        setTimeout(() => {
            currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
            displayGreeting = greetings[currentGreetingIndex];
            greetingClass = 'fade-in-down';
        }, 450); // Half of 1.5s for transition
        setTimeout(rotateGreeting, 2000); // Change every 1.5 seconds
    }

    import { onMount } from 'svelte';
    onMount(rotateGreeting);
</script>

<!-- <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between">
    <div>
        <div class="mb-1 text-blue-400 font-medium">
            <span class="text-md inline-block">
                <span class="inline-block {greetingClass}">{displayGreeting}</span>, my name is
            </span>
        </div>
        <h1 class="text-5xl font-bold mb-2">Harsh Peshwani</h1>
        <p class="text-xl text-gray-100">Building at the intersection of product, people &amp; data</p>
    </div>
    <div class="mt-4 md:mt-0 flex space-x-3">
        <a href="https://linkedin.com/in/harshpeshwani" aria-label="LinkedIn Profile" class="p-2 bg-blue-400 hover:bg-blue-600 text-white rounded-full transition-colors duration-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        </a>
        <a href="mailto:hpeshwani.dev@gmail.com" aria-label="Email Me" class="p-2 bg-blue-400 hover:bg-blue-600 text-white rounded-full transition-colors duration-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
        </a>
    </div>
</div> -->

<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 mb-5">
    <!-- Left Section: Greeting and Name -->
    <div class="text-center md:text-left">
      <div class="mb-2 text-blue-400 font-medium text-lg">
        <span class="inline-block">
          <span class="{greetingClass}">{displayGreeting}</span>, my name is
        </span>
      </div>
      <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-3">
        Harsh Peshwani
      </h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
        Building at the intersection of product, people &amp; data
      </p>
    </div>
  
    <!-- Right Section: Social Links -->
    <div class="flex items-center md:justify-end space-x-4">
      <a
        href="https://linkedin.com/in/harshpeshwani"
        aria-label="LinkedIn Profile"
        class="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
  
      <a
        href="mailto:hpeshwani.dev@gmail.com"
        aria-label="Email Me"
        class="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        </svg>
      </a>
    </div>
  </div>
  
<div class="mb-4">
    <div class="w-full h-1 bg-gradient-to-r from-blue-400 to-transparent mb-10"></div>
    <p class="text-lg leading-relaxed mb-6 text-gray-100">I’m a results-driven developer passionate about building reliable, high-impact digital experiences. With hands-on expertise in full-stack development, software quality assurance, and data-driven problem solving, I bridge the gap between code and business goals.</p>
    <p class="text-lg leading-relaxed text-gray-100">I enjoy turning complex requirements into scalable, user-focused solutions while collaborating with teams, optimizing performance, and continuously learning new technologies to craft products that make a measurable difference.</p>
</div>

<style>
    .fade-in-down {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
    }

    .fade-out-up {
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
    }
</style>
