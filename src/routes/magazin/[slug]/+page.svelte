<script lang="ts">
	import PostImage from './../../../components/PostImage.svelte';
	import { urlFor } from './../../../lib/sanity';
	// @ts-ignore
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const utcToGermanDate = (utcDate: string) => {
		return new Date(utcDate).toLocaleDateString('de-DE', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	};
</script>

<svelte:head>
	<title>{data.articleContent.title}</title>
</svelte:head>

<article class="article-body">
	<div class="main-content">
		<div class="title-section">
			<h2>{data.articleContent.caption}</h2>
			<h1>{data.articleContent.title}</h1>
		</div>
		<div class="title-image">
			<figure>
				<img src={urlFor(data.articleContent.image)} alt="bild" />
				{#if data.articleContent.imageCaption}
					<figcaption>{data.articleContent.imageCaption}</figcaption>
				{/if}
				{#if data.articleContent.imageCreator}
					<figcaption class="smaller-caption">{data.articleContent.imageCreator}</figcaption>
				{/if}
			</figure>
		</div>
		<div class="under-title-content">
			<PortableText
				value={data.articleContent.content}
				components={{
					types: {
						image: PostImage
					}
				}}
			/>
		</div>
	</div>
</article>

<style lang="scss">
	figure {
		margin: 0;
	}
	@media (min-width: 768px) {
		.main-content {
			width: 70%;
			.under-title-content {
				padding: 0 5rem;
			}
		}
	}
	.main-content {
		line-height: 1.5;
		padding-left: 1rem;
	}

	article.article-body {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		div.title-image {
			figcaption.smaller-caption {
				font-size: 0.75rem;
			}
			width: 100%;
			img {
				width: 100%;
				height: 45vh;
				object-fit: cover;
				overflow: hidden;
			}
		}

		div.title-section {
			h2 {
				margin: 0;
				font-weight: 900;
				font-size: 1.25rem;
			}
			h1 {
				line-height: 1;
				margin: 0 0 0.5rem 0;
				font-size: 2.75rem;
				font-weight: 900;
				text-align: start;
			}
		}
	}
</style>
