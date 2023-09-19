<script lang="ts">
	// @ts-ignore
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>
	<PortableText value={data.pageContent.content} />
</div>

<style>
	li {
		list-style-type: none;
	}

	div {
		padding-left: 1rem;
	}

	@media (width >= 768px) {
		div {
			width: 66%;
		}
	}
</style>
