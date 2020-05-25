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

<footer></footer>

<style>
main {
  padding: 0 1em;
}

footer {
	height: 4em;
}
</style>