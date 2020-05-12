<script context="module">
  import {findPost} from '../dics'

  export function preload(page) {
    return { post: findPost(page.params._id) }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>Birth date: <code>{post.birthdate}</code></p>
<h2>Bio</h2>
<p>{post.bio}</p>
<figure>
	<img src="{post.photo}" alt="{post.title}">
	<figcaption>{post.firstname} {post.middlename} {post.lastname}</figcaption>
</figure>

{#if post.profile}
<h2>Profile</h2>
<aside>
{#each Object.entries(post.profile) as [key, value]}
	<label><span>{key}</span><input type=range min="1" max="5" disabled value={value}></label>
{/each}
<!-- 
	<label><span>Psychosis</span><input type=range min="1" max="5" disabled value={post.profile.psychosis}></label>
	<label><span>Power_hunger</span><input type=range min="1" max="5" disabled value={post.profile.power_hunger}></label>
	<label><span>Agression</span><input type=range min="1" max="5" disabled value={post.profile.agression}></label>
	<label><span>Cynicism</span><input type=range min="1" max="5" disabled value={post.profile.cynicism}></label>
	<label><span>Autocracy</span><input type=range min="1" max="5" disabled value={post.profile.autocracy}></label>
	<label><span>Telling_lies</span><input type=range min="1" max="5" disabled value={post.profile.telling_lies}></label>
	<label><span>Bullshit_factor</span><input type=range min="1" max="5" disabled
			value={post.profile.bullshit_factor}></label>
	<label><span>Corruption</span><input type=range min="1" max="5" disabled value={post.profile.corruption}></label>
	<label><span>Megalomania</span><input type=range min="1" max="5" disabled value={post.profile.megalomania}></label>
	<label><span>Manipulation</span><input type=range min="1" max="5" disabled value={post.profile.manipulation}></label>
	<label><span>Militancy</span><input type=range min="1" max="5" disabled value={post.profile.militancy}></label>
	<label><span>Narcissism</span><input type=range min="1" max="5" disabled value={post.profile.narcissism}></label> -->
</aside>
{/if}

<h2>Knowledge</h2>
<div class='content'>
	{@html post.html}
</div>