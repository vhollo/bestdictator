<script>
	import {posts} from '../../tests'
	import ButtonTys from '../../components/button-tys.svelte'
	import { score } from '../../stores.js';
</script>

<svelte:head>
  <title>Self tests</title>
</svelte:head>

<header></header>

<h1>Self tests</h1>
<p>TEST your aptitude to rate a DiC</p>
<ul>
	{#each posts as post}
	<li>
		<a href={`/tests/${post._id}`}>
			{post.title}
		</a>
		<mark hidden={!$score[post._id]}>{$score[post._id]} pts</mark>
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
	grid-gap: var(--gutter);
	margin: 2rem 0;
}
li {
	margin: 0 0 var(--gutter) 0;
	background-color: var(--toolbg);
	position: relative;
}
li:hover {
	background-color: var(--maincolor);
}

a {
	display: block;
	padding: var(--gutter);
}
mark {
	font-size: .8rem;
	position: absolute;
	top: -.2rem;
	right: -.2rem;
	padding: .2rem var(--gutterx);
	line-height: 1.4;
	border-radius: .8rem;
	min-width: 1.4rem;
	text-align: center;
}
</style>