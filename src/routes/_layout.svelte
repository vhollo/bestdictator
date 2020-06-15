<script context="module">
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';
</script>
<script>
	export let segment;
</script>
<Tailwindcss />

<Nav {segment} />

<main>
	<slot></slot>
</main>

<footer>
	<a href="mailto:dev@bestdictator.com"><small>graphics&nbsp;by&nbsp;KA &nbsp;&&nbsp; developed&nbsp;by&nbsp;VL</small></a>
</footer>

<style>
main {
	padding: 0 var(--gutter);
	min-height: calc(100vh - 9rem);
	background-color: var(--bgcolor);
	border-bottom: 2px solid var(--extcolor);
	margin-bottom: 4rem;
}
@media screen and (min-width: 40rem) {
	main {
		padding: 0 var(--gutter2);
	}
}
footer {
	min-height: 4rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--toolbg);
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: -1;
	max-width: 64em;
	margin: 0 auto;
	overflow-y: visible;
}
</style>