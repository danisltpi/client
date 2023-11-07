<script>
	import Icon from './Icon.svelte';
</script>

<footer>
	<div class="social-media-icons">
		<a href="https://www.instagram.com/kennichmagazin" target="_blank"
			><Icon iconType="instagram" /></a
		>
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

	a:hover {
		opacity: 0.5;
	}
</style>
