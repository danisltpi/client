<script lang="ts">
	import '../app.css';
	import Search from '../components/Search.svelte';
	import { isSearchOpen, toggleSearch } from '../stores/search';
	import Header from './../components/Header.svelte';
	import Navbar from './../components/Navbar.svelte';

	const handleBackdropClick = (event: Event) => {
		if (event.target === event.currentTarget) {
			toggleSearch();
		}
	};
</script>

{#if $isSearchOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="search-container" on:click={handleBackdropClick}>
		<Search />
	</div>
{/if}

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

	div.search-container {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(1px);
		height: 100%;
		width: 100%;
	}

	div.slot-container {
		padding: 2rem 3rem 1rem 0;
	}

	:global(body) {
		transition: background-color 0.3s;
		transition: filter 0.3s ease; /* Smooth filter transition for blur effect */
		color: $light-fg-color;
		background-color: $light-bg-color;
	}

	:global(body.dark) {
		color: $dark-fg-color;
		background-color: $dark-bg-color;
	}

	:global(div) {
		background-color: inherit;
	}
</style>
