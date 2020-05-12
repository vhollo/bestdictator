<script context="module">
  import {findPost} from '../dics'

  export function preload(page) {
    return { post: findPost(page.params._id) }
  }
</script>

<script>
	export let post
	const fieldnames = {
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
		bullshit_factor: "Bullshit factor",
	}
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
{#if post.desc}
<h2>{post.desc}</h2>
{/if}

<p>Date of Birth: <code>{post.birthdate || '?'}</code></p>
{#if post.isdead}
<p>Date of Death: <code>{post.deathdate || '?'}</code></p>
{/if}

<h3>Bio</h3>
<p>{@html post.bio}</p>
<figure>
	<img src="{post.photo}" alt="{post.title}">
	<figcaption>{post.firstname || ''} {post.middlename || ''} {post.lastname || ''}</figcaption>
</figure>

{#if post.profile}
<h2>Profile</h2>
<aside>
{#each Object.entries(post.profile) as [key, value]}
	<label><span>{fieldnames[key]}</span> <input type=range min="1" max="5" disabled value={value}></label>
{/each}
</aside>
{/if}

<h2>Knowledge</h2>
<div class='content'>
	{@html post.html}
</div>