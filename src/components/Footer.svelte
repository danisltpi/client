<script>
	import Icon from './Icon.svelte';
</script>

<footer>
	<div class="social-media-icons">
		<a href="https://www.instagram.com/kennichmagazin" target="_blank"
			><Icon iconType="instagram" /></a
		>
	</div>
	<div class="legal">
		<a href="/impressum">impressum</a>
	</div>
	<p>©kennichmagazin</p>
</footer>

<style>
	footer {
		margin-top: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	div.legal {
		margin-top: 1rem;
	}

	a:hover {
		opacity: 0.5;
	}
</style>
