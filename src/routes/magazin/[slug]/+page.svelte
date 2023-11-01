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
	<div class="title-section">
		<p>{utcToGermanDate(data.articleContent.publishedAt)}</p>
		<p><b>{data.articleContent.caption}</b></p>
		<h1>{data.articleContent.title}</h1>
	</div>
	<div class="title-image">
		<figure>
			<img src={urlFor(data.articleContent.image)} alt="bild" />
			{#if data.articleContent.imageCaption}
				<figcaption>{data.articleContent.imageCaption}</figcaption>
			{/if}
			{#if data.articleContent.imageCreator}
				<figcaption>Foto: {data.articleContent.imageCreator}</figcaption>
			{/if}
		</figure>
	</div>
	<div class="main-content">
		<PortableText
			value={data.articleContent.content}
			components={{
				types: {
					image: PostImage
				}
			}}
		/>
	</div>
</article>

<style lang="scss">
	@media (min-width: 768px) {
		.main-content {
			width: 66%;
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
			width: 100%;
			img {
				width: 100%;
				height: 45vh;
				object-fit: cover;
				overflow: hidden;
			}
		}

		div.title-section {
			padding-left: 2rem;
			padding-right: 2rem;
			h1 {
				font-weight: 500;
			}
		}
	}
</style>
