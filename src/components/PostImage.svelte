<script lang="ts">
	import { urlFor } from '$lib/sanity';
	export let portableText: any;
</script>

<img src={urlFor(portableText.value)} alt="" />

<style>
	img {
		max-width: 100%;
	}
</style>
