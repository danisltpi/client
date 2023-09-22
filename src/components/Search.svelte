<script lang="ts">
	import { fetchArticlesByTitle, urlFor, type Slug } from '$lib/sanity';
	import { gotoArticle } from '$lib/util';
	import { toggleSearch } from '../stores/search';

	type SearchResult = {
		title: string;
		caption: string;
		image: string;
		slug: Slug;
	};

	let searchInput = '';
	let filteredArticles: SearchResult[] = [];

	const handleInput = async () => {
		if (searchInput.length >= 2) {
			filteredArticles = await fetchArticlesByTitle(searchInput);
		} else {
			filteredArticles = [];
		}
	};

	const handleArticleClick = (slug: Slug) => {
		gotoArticle(slug);
		toggleSearch();
	};
</script>

<div class="search-box">
	<div class="search-bar">
		<form>
			<input
				type="text"
				placeholder="suche artikel"
				autofocus
				bind:value={searchInput}
				on:input={handleInput}
			/>
		</form>
	</div>

	{#if filteredArticles.length > 0}
		<div class="search-results">
			{#each filteredArticles as filteredArticle}
				<div
					class="result"
					on:click={() => handleArticleClick(filteredArticle.slug)}
					on:keydown={() => handleArticleClick(filteredArticle.slug)}
					role="button"
					tabindex="0"
				>
					<img src={urlFor(filteredArticle.image)} alt="cover" />
					<div class="text-container">
						<span class="bolder">{filteredArticle.title}</span>
						<span class="caption">{filteredArticle.caption}</span>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if filteredArticles.length === 0 && searchInput.length >= 2}
		<div class="no-results">
			<span>keine ergebnisse für "{searchInput}"</span>
		</div>
	{/if}
</div>

<style lang="scss">
	div {
		color: black;
	}
	div.no-results {
		border-top: 1px solid gray;
		padding: 0.5rem;
	}

	div.search-box {
		position: absolute;
		background-color: white;
		width: 90%;
		max-height: 30rem;
		top: 4rem;
		filter: drop-shadow(0 0 0.2rem);

		div.search-bar {
			padding: 1rem;

			input {
				width: 80vw;
				height: 100%;
				border: none;
				font-size: 1.5rem;
				outline: none;
			}
		}
		div.search-results {
			max-height: 28rem;
			overflow: auto;
			div.result {
				&:hover {
					cursor: pointer;
					opacity: 0.8;
				}
				border-top: gray solid 1px;
				display: flex;
				height: 7rem;

				img {
					object-fit: cover;
					width: 7rem;
					height: 100%;
					flex-shrink: 0;
				}

				div.text-container {
					max-height: 100%;
					padding: 0.5rem;
					span {
						max-width: 100%;
						max-height: 5rem;
						&.caption {
							display: -webkit-box;
							text-overflow: ellipsis;
							overflow: hidden;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
						}
						&.bolder {
							font-weight: 500;
							text-overflow: ellipsis;
							overflow: hidden;
						}
					}
				}
			}
		}
	}
</style>
