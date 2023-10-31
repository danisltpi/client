<script lang="ts">
	// @ts-ignore
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.pageContent.title}</title>
</svelte:head>

<div>
	<PortableText value={data.pageContent.content} />
</div>

<style>
	li {
		list-style-type: none;
	}

	div {
		padding-left: 1rem;
		line-height: 1.5;
	}

	@media (min-width: 768px) {
		div {
			width: 66%;
		}
	}
</style>
