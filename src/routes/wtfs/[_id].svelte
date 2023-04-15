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
</article>
<aside>
	<p>Coming to your country soon!</p>
	<p><a href="https://liberapay.com/TheDictatorists/donate" target="_blank"
			rel="roopener noreferrer"><button>DONATE</button></a></p>
</aside>

<style>
header {
	margin-bottom: 25vh;
}
header :global(svg) {
	width: 40vh;
	height: calc(100vh - 3rem);
	fill: var(--txtcolor);
}
article {
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
article :global(p) {
	padding: var(--gutter) 0;
}
p {
	margin: var(--gutter) auto;
	text-align: center;
}
</style>