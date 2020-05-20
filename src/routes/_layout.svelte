<script context="module">
import Tailwindcss from '../components/Tailwindcss.svelte';
import Nav from '../components/Nav.svelte';
</script>
<script>
export let segment;
</script>
<Tailwindcss />

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<style global>
#sapper {
	max-width: 64em;
	margin: 0 auto;
	padding: 0 1em;
}
</style>