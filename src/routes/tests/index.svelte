<script>
import {posts} from '../tests'
import ButtonTys from '../../components/button-tys.svelte'
</script>

<svelte:head>
  <title>Self tests</title>
</svelte:head>

<h1>Self tests</h1>
<p>TEST your aptitude to rate a DiC</p>
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
h1 {
	margin-bottom: 0;
}
ul {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
	grid-gap: var(--gutterx);
	margin: 2rem 0;
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