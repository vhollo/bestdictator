<script context="module">
import {findPost} from '../dics'

export function preload(page) {
	return { post: findPost(page.params._id) }
}
</script>

<script>
import Header_dic from '../../components/headers/DiC.svelte';
export let post

const profile_names = {
	corruption: "Corruption",
	power_hunger: "Power hunger",
	agression: "Agression",
	autocracy: "Autocracy",
	telling_lies: "Telling lies",
	manipulation: "Manipulation",
	narcissism: "Narcissism",
	megalomania: "Megalomania",
	psychosis: "Psychosis",
	militancy: "Militancy",
	cynicism: "Cynicism",
	bullshit: "Bullshit factor",
}

const power_names = {
	parliament: "Parliament",
	print: "Print Media",
	online: "Online Media",
	tv: "Television",
	justice: "Justice Depts",
	economy: "Economy",
	education: "Education",
	culture: "Culture",
	religion: "Religions",
	state: "State control",
	constitution: "Constitution",
	bullshit: "Bullshit factor",
}
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Header_dic post="{post}" />

{#if post.profile}
<h2>Profile</h2>
<aside>
{#each Object.entries(post.profile) as [key, value]}
	<label><span>{profile_names[key]}</span> <input type=range min="1" max="5" disabled value={value}></label>
{/each}
</aside>
{/if}

<h3>{post.firstname || ''} {post.middlename || ''} {post.lastname || ''}</h3>
<p>{@html post.bio}</p>
<p>Date of Birth: <code>{post.birthdate || '?'}</code></p>
{#if post.isdead}
<p>Date of Death: <code>{post.deathdate || '?'}</code></p>
{/if}

{#if post.power}
<h2>Power Indicators</h2>
<aside>
{#each Object.entries(post.power) as [key, value]}
	<label><span>{power_names[key]}</span> <input type=range min="1" max="5" disabled value={value}></label>
{/each}
</aside>
{/if}

<h2>Knowledge</h2>
<div class='content'>
	{@html post.html}
</div>

<style>
aside {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
	grid-gap: 0 2rem;
	@apply shadow-md;
}
aside > label {
	display: flex;
	justify-content: space-between;
}

</style>