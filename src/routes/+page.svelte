<script lang="ts">
	import { gotoArticle } from '$lib/util';
	import type { PageData } from './$types';
	import { urlFor } from './../lib/sanity';

	export let data: PageData;
</script>

<svelte:head>
	<title>kennich</title>
</svelte:head>

<div class="flex-cards">
	{#if data.articles && data.articles.length}
		{#each data.articles as article}
			<div
				class="title-image-card"
				role="button"
				tabindex="0"
				on:click={() => gotoArticle(article.slug)}
				on:keydown={() => gotoArticle(article.slug)}
			>
				<img src={urlFor(article.image)} alt="bild" />
				<article>
					<h4 class="card-title">{article.title}</h4>
					<p>
						{article.caption}
					</p>
				</article>
			</div>
		{/each}
	{/if}
</div>

<style lang="scss">
	h4.card-title {
		font-weight: 500;
	}

	div.flex-cards {
		padding-left: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	h4.card-title,
	p {
		margin: 0px;
	}

	div.title-image-card {
		padding-top: 1rem;
		width: 19rem;

		&:hover {
			cursor: pointer;
			opacity: 0.5;
		}
	}

	img {
		object-fit: cover;
		overflow: hidden;
		width: 19rem;
		height: 19rem;
	}
</style>
