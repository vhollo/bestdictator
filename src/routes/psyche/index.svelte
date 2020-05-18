<script>
import {posts} from '../psyche'
</script>

<svelte:head>
  <title>Recent PSYCHE articles</title>
</svelte:head>

<h1>Recent PSYCHE articles</h1>

{#each posts as post}
  <article>
    <a href={`/psyche/${post._id}`}>
      <h2>{post.title}</h2>
    </a>
  </article>
{/each}
