<script context="module">
	import Dic_top from '../../components/Dic-top.svelte'
	import Could_I from '../../components/Could-I.svelte';
</script>

<svelte:head>
  <title>DiCs</title>
</svelte:head>

<header></header>
<section>
<Dic_top list="list"/>
</section>

<Could_I/>

<style>
section {
	margin: var(--gutter) 0;
}
</style>