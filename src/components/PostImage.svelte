<script lang="ts">
	import { urlFor } from '$lib/sanity';
	export let portableText: any;
</script>

<div>
	<figure>
		<img src={urlFor(portableText.value)} alt="bild" />
		{#if portableText.value.creator}
			<figcaption>{portableText.value.creator}</figcaption>
		{/if}
	</figure>
</div>

<style>
	@media (min-width: 768px) {
	}
	figure {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin: 0;
	}

	figcaption {
		font-size: 0.75rem;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem 0;
	}

	img {
		max-width: 100%;
	}
</style>
