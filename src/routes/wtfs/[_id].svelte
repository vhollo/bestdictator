<script context="module">
  import {findPost} from '../wtfs'

  export function preload(page) {
    return { post: findPost(page.params._id) }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<!-- <h1>{post.title}</h1> -->
<header class="darkinv"></header>
<article>
	{@html post.html}
	<small>Coming to your country soon</small>
</article>

<style>
header {
	background-image: url(/DiC-Logo.svg);
	height: 100vh;
	margin-bottom: 50vh;
	background-position: center;
	background-size: 60vh;
	background-repeat: no-repeat;
}
article {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	justify-content: center;
	padding: 1rem;
	hyphens: auto;
	font-family: monospace;
	text-transform: uppercase;
	max-width: 20em;
	font-size: 1.5rem;
	font-weight: normal;
}
small {
	padding: 2rem 0;
}
</style>