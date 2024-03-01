<script lang="ts">
	import { urlFor, type Slug } from '$lib/sanity';
	import { gotoArticle } from '$lib/util';

	type CardData = {
		articles: {
			title: string;
			caption: string;
			image: string;
			slug: Slug;
		}[];
	};

	export let cardData: CardData;
</script>

<div class="flex-cards">
	{#if cardData.articles && cardData.articles.length}
		{#each cardData.articles as article}
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
		font-weight: 900;
		font-size: 1.5rem;
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
