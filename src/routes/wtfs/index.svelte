<script>
import {posts} from '../wtfs'
</script>

<svelte:head>
  <title>Recent WTFs</title>
</svelte:head>

<h1>Recent WTFs</h1>

<ul>
	{#each posts as post}
	<li>
		<a href={`/wtfs/${post._id}`}>
			{post.title}
		</a>
	</li>
{/each}
</ul>

<style>
ul {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
	grid-gap: .5rem;
}
li {
	margin: 0 0 1rem 0;
	background-color: var(--toolbg);
}
li:hover {
	background-color: var(--maincolor);
}

a {
	display: block;
	padding: 0.75rem 1.25rem;
}
</style>