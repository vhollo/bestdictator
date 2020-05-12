<script>
  import {posts} from '../wtfs'
</script>

<svelte:head>
  <title>Recent WTFs</title>
</svelte:head>

<h1>Recent WTFs</h1>

{#each posts as post}
  <article>
    <a href={`/wtfs/${post._id}`}>
      <h2>{post.title}</h2>
    </a>
  </article>
{/each}
