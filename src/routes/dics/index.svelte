<script>
  import {posts} from '../dics'
</script>

<svelte:head>
  <title>Recent DiCs</title>
</svelte:head>

<h1>Recent DiCs</h1>

{#each posts as post}
  <article>
    <a href={`/dics/${post._id}`}>
      <h2>{post.title}</h2>
      <p>{post.bio}</p>
    </a>
  </article>
{/each}
