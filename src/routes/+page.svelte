<script lang="ts">
	import type { PageData } from './$types';
	import Cards from './../components/Cards.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>kennich</title>
</svelte:head>

<Cards cardData={data} />
