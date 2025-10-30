<script>
	import Home from './routes/+page.svelte';
	import About from './routes/about/+page.svelte';
	import Projects from './routes/projects/+page.svelte';
	import Contact from './routes/contact/+page.svelte';
</script>

<main class="scroll-container">
	<section id="home"><Background /><Home /></section>
	<section id="about"><Background /><About /></section>
	<section id="projects"><Background /><Projects /></section>
	<section id="contact"><Background /><Contact /></section>
</main>

<style>
	.scroll-container {
		height: 100vh;
		overflow-y: hidden;
	}

	section {
		height: 100vh;
		scroll-snap-align: start;
		position: relative;
	}
</style>
