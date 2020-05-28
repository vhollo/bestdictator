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
		padding: 0 1em 5em;
		min-height: 100vh;
	}

	footer {
		min-height: 4em;
		text-align: center;
		border-top: 2px solid var(--extcolor);
		display: flex;
    align-items: center;
    justify-content: center;
	}
</style>