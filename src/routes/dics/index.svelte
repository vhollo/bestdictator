<script>
	/* import { score, threshold } from '../stores.js'; */
	import Dic_grid from '../../components/dic-grid.svelte'
	import ButtonTys from '../../components/button-tys.svelte'
</script>

<svelte:head>
  <title>DiCs</title>
</svelte:head>

<section>
<Dic_grid list="list"/>
</section>

<ButtonTys backid={''}/>

<style>
section {
	margin: var(--gutter) 0;
}
</style>