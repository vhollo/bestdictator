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

<div class='content'>
	{@html post.html}
</div>