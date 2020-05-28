<script>
	/* import { score, threshold } from '../stores.js'; */
	import Dic_grid from '../../components/dic-grid.svelte'
	import ButtonTys from '../../components/button-tys.svelte'
</script>

<svelte:head>
  <title>DiCs</title>
</svelte:head>

<Dic_grid list="list"/>

<ButtonTys backid={''}/>

<style>
nav {
	margin-top: var(--spacer);
}
nav a {
	display: block;
	width: fit-content;
	margin-left: auto;
	margin-right: auto;
}
</style>