<script>
	import { score } from './stores.js';
	import Header_rate from '../components/headers/Header_rate.svelte';
	/* import Linking_dic from '../components/headers/Linking_dic.svelte' */
	import Dic_grid from '../components/dic-grid.svelte'
</script>

<svelte:head>
	<title>Rate Your Dictator</title>
</svelte:head>

<Header_rate />

<Dic_grid list="3" score={$score}/>

<figure>
	<img alt='Mockup' src='mockup-3.jpg'>
	<!-- <figcaption>HIGH FIVE!</figcaption> -->
</figure>

<!-- <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p> -->

<style>
:global(section) {
	max-width: 60%;
}

figure {
	margin: var(--gutter) var(--gutter-);
}
</style>