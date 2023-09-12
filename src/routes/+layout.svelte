<script>
	import '../app.css';
	import Header from './../components/Header.svelte';
	import Navbar from './../components/Navbar.svelte';
</script>

<Header />
<div class="slot-container">
	<slot />
</div>
<Navbar />

<style lang="scss">
	@import '$lib/sass/theme';
	@font-face {
		font-family: 'RDJ-Hand';
		src: url('/RdjHandPixel-5w3L.otf');
	}

	div.slot-container {
		display: flex;
		padding: 2rem 3rem 1rem 1rem;
		flex-direction: column;
		justify-content: space-between;
	}

	/* big screen layout */
	@media (width >= 768px) {
		div.slot-container {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	:global(body) {
		color: $light-fg-color;
		background-color: $light-bg-color;
		transition: background-color 0.3s;
	}
</style>
