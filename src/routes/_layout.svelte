<script context="module">
	import Tailwindcss from '../components/Tailwindcss.svelte'
	import Nav from '../components/Nav.svelte'
	import { onMount } from 'svelte'
	import debounce from 'lodash/debounce'
</script>
<script>
	export let segment
	onMount(() => {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`)

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight
			document.documentElement.style.setProperty('--vh', `${vh}px`)
			console.log(vh)
		})
	})
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
	display: flow-root;
	padding: 0 var(--gutter);
	background-color: var(--bgcolor);
	border-bottom: 2px solid var(--extcolor);
	margin-bottom: 4rem;
	min-height: calc(100vh - 7rem);
	min-height: calc(var(--vh) - 7rem);
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