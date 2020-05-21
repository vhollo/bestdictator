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
ul {}

li {
	margin: 0 0 1rem 0;
	border-width: 2px;
	padding: 0 1rem;
}
li:hover {
	background-color: var(--toolbg);
}

a {
	display: block;
	padding: 1rem 0;
}
</style>