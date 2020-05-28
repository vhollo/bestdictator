<script>
/* import { writable } from 'svelte/store';
import { get } from 'svelte/store';
const score = get(score); */
import Linking_dic from './headers/Linking_dic.svelte'
import { posts } from '../routes/dics'
export let list = 'list'
//export let score = 0
</script>

<section>
	<h1>Dictator Top {list}</h1>
	<div>
		{#each posts as post, i}
		{#if list === 'list' || i < list}
		<Linking_dic post="{post}" />
		{/if}
		{/each}
	</div>
	{#if list != 'list'}
	<button><a href="/dics">FULL LIST</a></button>
	{/if}
</section>

<style>
section {
	margin: var(--gutter) 0;
}
div {
	display: grid;
	grid-template-columns: 1fr min-content;
	grid-gap: var(--gutter);
}
button {
	display: block;
	margin-left: auto;
	margin-right: auto;;
}

</style>