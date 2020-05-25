<script>
import FavDic from './svg/dic-fav.svelte';
export let segment;
</script>

<nav>
	<a aria-current='{segment === undefined ? "page" : undefined}' href='.'><FavDic /></a>
	<ul>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current='{segment === "dics" ? "page" : undefined}' href='dics'>dics</a></li>
		<li><a rel=prefetch aria-current='{segment === "wtfs" ? "page" : undefined}' href='wtfs/why-how'>wtfs</a></li>
		<li><a rel=prefetch aria-current='{segment === "tests" ? "page" : undefined}' href='tests/could-i-be-a-dictator'>test</a></li>
		<li><a rel=prefetch aria-current='{segment === "psyche" ? "page" : undefined}' href='psyche'>psyche</a></li>
	</ul>
</nav>

<style>
nav {
	font-weight: 300;
	position: relative;
	top: 0;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	overflow-y:visible;
}
@media screen and (min-height: 480px) {
	nav {
		position: sticky;
		top: 0;
	}
}
nav > a {
	background-color: var(--bgcolor);
	margin-right: auto;
	margin-bottom:-100%;
	padding: .5rem 1rem;
}
nav > a :global(svg) {
	width: auto;
	height: 2rem;
	fill: var(--maincolor);
}

ul {
	background-color: var(--bgcolor);
	overflow-x: auto;
	white-space: nowrap;
}
li {
	display: inline-block;
}
[aria-current] {
	background: var(--maincolor);
}
[aria-current] :global(svg) {
	fill: var(--txtcolor);
}

a {
	text-decoration: none;
	padding: .625rem 1rem;
	display: block;
	text-transform: uppercase;
	border-bottom: 2px solid var(--extcolor);
}
</style>
