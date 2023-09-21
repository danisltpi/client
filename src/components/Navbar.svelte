<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="vertical">
	<a href="/ueber-uns" class:active={$page.params.slug === 'ueber-uns'}>über uns</a>
	<a href="/mach-mit" class:active={$page.params.slug === 'mach-mit'}>mach mit!</a>
	<!-- <a href="/ausgaben" class:active={$page.route.id === '/ausgaben'}>ausgaben</a>
	<a href="/shop" class:active={$page.route.id === '/shop'}>shop</a> -->
</nav>

<style lang="scss">
	.vertical {
		position: fixed;
		display: flex;
		flex-direction: row;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		right: 1rem;
		top: 3rem;
		height: 100%;

		a {
			display: inline-block;
			margin-bottom: 1rem;
			font-size: 1.5rem;

			&.active,
			&:hover {
				opacity: 0.5;
			}
		}
	}
</style>
