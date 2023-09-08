<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import { urlFor, type Slug } from './../lib/sanity';

	export let data: PageData;

	const gotoArticle = (slug: Slug) => {
		goto('/magazin/' + slug.current);
		return null;
	};
</script>

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

<style lang="scss">
	h4.card-title {
		font-weight: 500;
	}

	h4.card-title,
	p {
		margin: 0px;
	}

	div.title-image-card {
		padding-top: 1rem;
		width: 20rem;

		&:hover {
			cursor: pointer;
			opacity: 0.5;
		}
	}

	img {
		object-fit: cover;
		overflow: hidden;
		width: 20rem;
		height: 20rem;
	}
</style>
