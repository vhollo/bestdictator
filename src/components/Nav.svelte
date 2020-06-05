<script>
import { bx_brightness_half } from '../components/svg/boxicons.svelte';
import IconDic from './svg/dic-icon.svelte';
export let segment;
</script>

<nav>
	<a aria-current='{segment === undefined ? "page" : undefined}' href='.' aria-label="Landing page"><IconDic /></a>
	<ul>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current='{segment === "dics" ? "page" : undefined}' href='dics' aria-label="Dictators">DiCS</a></li>
		<li><a rel=prefetch aria-current='{segment === "wtfs" ? "page" : undefined}' href='wtfs/why-how' aria-label="Why and how we do it?">WTFS</a></li>
		<li><a rel=prefetch aria-current='{segment === "tests" ? "page" : undefined}' href='tests/could-i-be-a-dictator' aria-label="Test your authoriter values">TEST</a></li>
		<li><a rel=prefetch aria-current='{segment === "psyche" ? "page" : undefined}' href='psyche' aria-label="Psyche">PSYCHE</a></li>
		<li><label for="dm">{@html bx_brightness_half}</label></li>
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
	border-bottom: 2px solid var(--extcolor);
	background: var(--navbg);
	backdrop-filter: blur(3px);
}
@media screen and (min-height: 480px) {
	nav {
		position: sticky;
		top: 0;
	}
}
nav > a {
	/* background-color: var(--bgcolor); */
	margin-right: auto;
	padding: var(--gutterx);
}
nav > a :global(svg) {
	width: auto;
	height: var(--headsize);
	fill: var(--maincolor);
}

ul {
	/* background-color: var(--bgcolor); */
	overflow-x: auto;
	white-space: nowrap;
}
li {
	display: inline-block;
	vertical-align: middle;
}
a {
	text-decoration: none;
	padding: calc(var(--gutterx) + var(--gutterz)) var(--gutter);
	display: block;
	/* text-transform: uppercase; */
}
[aria-current] {
	background: var(--maincolor);
}
[aria-current] :global(svg) {
	fill: var(--txtcolor);
}

label {
	padding: var(--gutterx);
	display: block;
}
label > :global(svg) {
	height: var(--headsize);
	width: auto;
}
</style>
