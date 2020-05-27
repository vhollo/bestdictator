<script>
	import { score } from '../stores.js';
	import Linking_dic from '../../components/headers/Linking_dic.svelte'
	import {posts} from '../dics'
	import Dic_grid from '../../components/dic-grid.svelte'
</script>

<svelte:head>
  <title>Recent DiCs</title>
</svelte:head>

<Dic_grid list="list" score={$score}/>

<style>
</style>