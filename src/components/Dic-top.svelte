<script>
import Linking_dic from './headers/Linking_dic.svelte'
import { posts } from '../dics'
export let list = 'list'
</script>

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

<style>
div {
	display: grid;
	grid-template-columns: 1fr min-content;
	grid-gap: var(--gutter);
}
button {
	display: block;
	margin: var(--gutter2) auto;
}

</style>