<script>
	import Icon from './Icon.svelte';
</script>

<footer>
	<div class="social-media-icons">
		<a href="https://www.instagram.com/" target="_blank"><Icon iconType="instagram" /></a>
		<a href="https://www.tiktok.com/" target="_blank"><Icon iconType="tiktok" /></a>
		<a href="https://www.twitter.com/" target="_blank"><Icon iconType="x" /></a>
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
