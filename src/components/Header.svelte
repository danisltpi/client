<script>
	function handleMenuClick() {
		console.log('hello');
	}

	function handleSearchClick() {
		console.log('hello');
	}
</script>

<header class="align-horizontal">
	<button on:click={handleMenuClick} class="material-symbols-outlined menu-button">menu</button>
	<h1 class="title">
		<a href="/"> KENN/CH </a>
	</h1>
	<button on:click={handleSearchClick} class="material-symbols-outlined menu-button">search</button>
</header>

<style lang="scss">
	@import '$lib/sass/theme';
	header {
		position: fixed;
		z-index: 10;
		background-color: $light-bg-color;
	}

	button.menu-button {
		background: transparent;
		border: none !important;
		padding: 0 1rem;
		font-size: 1.5rem;
	}

	header.align-horizontal {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	h1.title {
		font-family: 'RDJ-Hand', monospace;
		font-weight: 200;
		margin: 0;
		padding-top: 0.5rem;
		text-align: center;
		font-size: 2.2rem;
	}

	button.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
	}

	button.material-symbols-outlined:hover {
		cursor: pointer;
	}

	@media (min-width: 768px) {
		h1.title {
			text-align: left;
		}
	}
</style>
