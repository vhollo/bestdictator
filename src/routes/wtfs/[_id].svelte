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

<h1>{post.title}</h1>
<header class="darkinv"></header>
<main>
	{@html post.html}
	<small>Coming to your country soon</small>
</main>

<style>
header {
	background-image: url(/DiC-Logo.svg);
	height: 100vh;
	margin-bottom: 50vh;
	background-position: center;
	background-size: 60vh;
	background-repeat: no-repeat;
}
main {
	/* position: fixed;
	top: 0;
	z-index: -1;
	overflow-y: scroll;
	height: 100vh; */
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
	font-size: xx-large;
	font-weight: normal;
}
small {
	padding: 2rem 0;
}
</style>