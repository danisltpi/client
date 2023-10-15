<script lang="ts">
	import PostImage from './../../../components/PostImage.svelte';
	import { urlFor } from './../../../lib/sanity';
	// @ts-ignore
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.articleContent.title}</title>
</svelte:head>

<article class="article-body">
	<div class="title-image">
		<div class="overlay-text">
			<h1>{data.articleContent.title}</h1>
			<p>{data.articleContent.caption}</p>
		</div>
		<img src={urlFor(data.articleContent.image)} alt="bild" />
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
	@media (width >= 768px) {
		.main-content {
			width: 66%;
			padding-left: 0;
		}
	}
	.main-content {
		padding-left: 1rem;
	}

	article.article-body {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		div.title-image {
			width: 100%;
			position: relative;
			display: inline-block;

			img {
				width: 100%;
				z-index: -10;
				height: 30rem;
				object-fit: cover;
				overflow: hidden;
			}

			.overlay-text {
				width: 70%;
				max-width: 20rem;
				position: absolute;
				color: white;
				padding-left: 1rem;

				h1 {
					font-weight: 500;
				}
			}
		}
	}
</style>
