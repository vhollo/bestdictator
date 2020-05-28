<script>
	import { score } from '../stores.js';
	import Dic_grid from '../../components/dic-grid.svelte'
</script>

<svelte:head>
  <title>DiCs</title>
</svelte:head>

<Dic_grid list="list" score={$score}/>

<style>
</style>