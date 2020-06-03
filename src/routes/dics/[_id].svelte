<script context="module">
	import _ from 'lodash'
	import {posts, findPost, calcaverage} from '../dics'
	import { profile_names, power_names } from '../../components/txt'
	import { score_sum, threshold } from '../stores.js';

	export function preload(page) {
		return { 
			post: findPost(page.params._id)
		}
	}
</script>

<script>
	import Header_dic from '../../components/headers/Header_dic.svelte'
	import Profile from '../../components/Profile.svelte'
	import ButtonTys from '../../components/button-tys.svelte'
	export let post
	export let profile = post.profile
	export let power = post.power
	$: post.profile = profile
	$: post.power = power

	$: average = calcaverage(post._id, profile, power)

</script>

<svelte:head>
	<title>{post.title}</title>
	{#if post.desc}<meta name='description' content='{post.desc}'>{/if}
	

</svelte:head>

<Header_dic post="{post}" />
<article id="post">
	<h2>Bio</h2>
	<p>Date of Birth: <time>{post.birthdate || '?'}</time></p>
	{#if post.isdead || post.lost}
	<p>Date of Death: <time>{post.deathdate || (post.lost ? 'Lost/hiding' : '?')}</time></p>
	{/if}
	{#if post.cause}
	<p>Cause of Death: {post.cause}</p>
	{/if}
	{#if post.bio}
	<p>{@html post.bio}</p>
	{/if}

	{#if post.profile}
	<h2>Profile</h2>
	<aside>
		<Profile bind:data="{profile}" average="{average}" names="{profile_names}" score={$score_sum} threshold={$threshold}/>
	</aside>
	{/if}

	{#if post.power}
	<h2>Power Indicators</h2>
	<aside>
		<Profile bind:data="{power}" average="{average}" names="{power_names}" score={$score_sum} threshold={$threshold}/>
	</aside>
	{/if}

	<h2>Knowledge</h2>
	{@html post.html}

</article>

<ButtonTys backid="{post._id}#post"/>

<style>
h2 {
	text-transform: uppercase;
}
aside {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
	grid-gap: 0 var(--spacer);
}
nav {
	margin-top: var(--spacer);
}
nav a {
	display: block;
	width: fit-content;
	margin-left: auto;
	margin-right: auto;
}
</style>