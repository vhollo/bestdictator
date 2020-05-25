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
	margin-left: var(--gutter-);
	margin-right: var(--gutter-);
	background-position: center;
	background-size: 40vh;
	background-repeat: no-repeat;
}
article {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	justify-content: center;
	padding: var(--gutter);
	hyphens: auto;
	font-family: monospace;
	text-transform: uppercase;
	max-width: 20em;
	font-size: var(--midsize);
	font-weight: normal;
}
small {
	padding: var(--spacing) 0;
}
</style>