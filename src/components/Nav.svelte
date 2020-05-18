<script>
export let segment;
</script>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li> -->
		<li><a rel=prefetch aria-current='{segment === "wtfs" ? "page" : undefined}' href='wtfs'>wtfs</a></li>
		<li><a rel=prefetch aria-current='{segment === "dics" ? "page" : undefined}' href='dics'>dics</a></li>
	</ul>
</nav>

<style>
nav {
	background-color: var(--bgcolor);
	border-bottom: 1px;
	border-color: var(--maincolor);
	font-weight: 300;
	padding: 0 1em;
	position: sticky;
	top: 0;
	z-index: 1;
}

ul {
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: flex-end;
}

/* clearfix */
/* ul::after {
	content: '';
	display: block;
	clear: both;
} */

li {
		/* display: block;
		float: left; */
}

[aria-current] {
	position: relative;
	display: inline-block;
	background: var(--maincolor);
}

/* [aria-current]::after {
	position: absolute;
	content: '';
	width: calc(100% - 1em);
	height: 2px;
	background-color: var(--maincolor);
	display: block;
	bottom: -1px;
} */

a {
	text-decoration: none;
	padding: 1em 0.5em;
	display: block;
	text-transform: uppercase;
}
</style>
