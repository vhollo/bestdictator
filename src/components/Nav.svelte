<script>
export let segment;
</script>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>

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
	background-color: var(--bgcolor);
	font-weight: 300;
	position: relative;
	top: 0;
	z-index: 1;
	@apply py-0 px-4 ml-auto;
}
@media screen and (min-height: 480px) {
	nav {
		position: sticky;
		top: 0;
	}
}
@media screen and (min-width: 900px) {
	nav {
		width: fit-content;
	}
}

ul {
	@apply m-0 p-0;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
}

[aria-current] {
	position: relative;
	display: inline-block;
	background: var(--maincolor);
}

a {
	text-decoration: none;
	@apply py-2 px-4;
	display: block;
	text-transform: uppercase;
}
</style>
