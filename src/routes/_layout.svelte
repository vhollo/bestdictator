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

<style global>
#sapper {
	max-width: 64em;
	margin: 0 auto;
}
main {
  padding: 0 1em;
}

footer {
	height: 4em;
}
</style>