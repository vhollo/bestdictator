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
	<small>graphics&nbsp;by&nbsp;KA &nbsp;&&nbsp; developed&nbsp;by&nbsp;VL</small>
</footer>

<style>
main {
	padding: 0 var(--gutter);
	min-height: 100vh;
	background-color: var(--bgcolor);
	border-bottom: 2px solid var(--extcolor);
}
@media screen and (min-width: 40rem) {
	main {
		padding: 0 var(--gutter2);
	}
}
footer {
	min-height: 4em;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--toolbg);
	position: sticky;
	bottom: 0;
	z-index: -1;
}
</style>