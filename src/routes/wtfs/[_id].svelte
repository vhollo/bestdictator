<script context="module">
	import LogoDic from '../../components/svg/dic-logo.svelte';
  import {findPost} from '../../wtfs'

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
<header><LogoDic/></header>
<article>
	{@html post.html}
	<small>Coming to your country soon</small>
</article>

<style>
header {
	margin-bottom: 25vh;
}

header :global(svg) {
	width: 40vh;
	height: 100vh;
	fill: var(--txtcolor);
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
	padding: var(--spacer) 0;
}
</style>