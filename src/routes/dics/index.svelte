<script>
import Linking_dic from '../../components/headers/Linking_dic.svelte'
import {posts} from '../dics'

</script>

<svelte:head>
  <title>Recent DiCs</title>
</svelte:head>

<h1>Dictator Top 10</h1>

<section>
{#each posts as post}
	<Linking_dic post="{post}" />
{/each}
</section>

<style>
section {
	display: grid;
	grid-template-columns: 1fr min-content;
	grid-gap: 1rem 2rem;
}
/* ul {
}
li {
	margin: 0 0 1rem 0;
	border-width: 2px;
	padding: 0 1rem;
}
li:hover {
	background-color: var(--toolbg);
} */
</style>