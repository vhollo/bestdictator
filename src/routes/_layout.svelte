<script context="module">
	import Tailwindcss from '../components/Tailwindcss.svelte'
	import Nav from '../components/Nav.svelte'
	import { onMount } from 'svelte'
	import { tick } from 'svelte';
</script>
<script>
	export let segment
	onMount(() => {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`)

		// We listen to the resize event
		window.addEventListener('resize', async () => {
			// We execute the same script as before
			await tick();
			let vh = window.innerHeight
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		})
	})
</script>
<Tailwindcss />

<Nav {segment} />

<main>
	<slot></slot>
</main>

<footer>
	<a href="mailto:dev@bestdictator.com"><small>by&nbsp;KA&nbsp;&&nbsp;VL</small></a>
</footer>

<style>
main {
	position: relative;
	background-color: var(--bgcolor);
	padding: 0 var(--gutter);
	border-bottom: 2px solid var(--extcolor);
	min-height: calc(var(--vh, 100vh) - 7rem);
	display: flow-root;
	margin-top: 4rem;
	margin-bottom: 4rem;
	bottom: 4rem;
	z-index: 1;
}
footer {
	/* position: static; */
	min-height: 4rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--toolbg);
	bottom: 0;
	left: 0;
	right: 0;
	max-width: 64em;
	margin: 0 auto;
	overflow-y: visible;
	position: fixed;
	z-index: 0;
}
@media screen and (min-width: 40rem) {
	main {
		padding: 0 var(--gutter2);
	}
}
</style>