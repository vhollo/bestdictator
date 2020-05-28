<script>
import {posts} from '../tests'
</script>

<svelte:head>
  <title>Self tests</title>
</svelte:head>

<h1>Self tests</h1>

<ul>
	{#each posts as post}
	<li>
		<a href={`/tests/${post._id}`}>
			{post.title}
		</a>
	</li>
{/each}
</ul>

<style>
ul {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
	grid-gap: var(--gutterx);
}
li {
	margin: 0 0 var(--gutter) 0;
	background-color: var(--toolbg);
}
li:hover {
	background-color: var(--maincolor);
}

a {
	display: block;
	padding: var(--gutter);
}
</style>