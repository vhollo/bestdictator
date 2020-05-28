<script>
/* import { writable } from 'svelte/store';
import { get } from 'svelte/store';
const score = get(score); */
import Linking_dic from './headers/Linking_dic.svelte'
import { posts } from '../routes/dics'
export let list = 'list'
export let score = 0
</script>

<section>
	<h1>Dictator Top {list}</h1>
	{#each posts as post, i}
	{#if list = 'list' || i < list}
	<Linking_dic post="{post}" />
	{/if}
	{/each}
	{#if list != 'list'}
	<button><a href="/dics">FULL LIST</a></button>
	{/if}
</section>

<style>
section {
	display: grid;
	grid-template-columns: 1fr min-content;
	grid-gap: var(--gutter);
	margin: var(--gutter) 0;
}
section h1 {
	grid-column: 1 / 3;
}
section button {
	display: block;
	margin-left: auto;
	margin-right: auto;;
	grid-column: 1 / 3;
	order: 9999;
}

</style>