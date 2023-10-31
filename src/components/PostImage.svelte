<script lang="ts">
	import { urlFor } from '$lib/sanity';
	export let portableText: any;
</script>

<div>
	<img src={urlFor(portableText.value)} alt="" />
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem 0;
	}
	img {
		max-width: 100%;
		max-height: 40rem;
	}
</style>
