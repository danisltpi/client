<script lang="ts">
	import type { PageData } from './$types';
	import Cards from './../../../components/Cards.svelte';
	export let data: PageData;
</script>

<Cards cardData={data} />
