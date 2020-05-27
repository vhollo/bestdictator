<script context="module">
import _ from 'lodash'
import {posts, findPost, calcaverage} from '../dics'
import { profile_names, power_names } from '../../components/txt'
import { score } from '../stores.js';

export function preload(page) {
	return { 
		post: findPost(page.params._id)
	}
}
</script>

<script>
/* import { writable } from 'svelte/store';
import { get } from 'svelte/store';
const score = get(score); */
import Header_dic from '../../components/headers/Header_dic.svelte'
import Profile from '../../components/Profile.svelte'
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
<section>
	<p>(You have {$score} points)</p>
	<h2>Bio</h2>
	<p>Date of Birth: <time>{post.birthdate || '?'}</time></p>
	{#if post.isdead}
	<p>Date of Death: <time>{post.deathdate || '?'}</time></p>
	{/if}
	<p>{@html post.bio}</p>

	{#if post.profile}
	<h2>Profile</h2>
	<aside>
		<Profile bind:data="{profile}" average="{average}" names="{profile_names}" score={$score}/>
	</aside>
	{/if}

	{#if post.power}
	<h2>Power Indicators</h2>
	<aside>
		<Profile bind:data="{power}" average="{average}" names="{power_names}" score={$score}/>
	</aside>
	{/if}

	<h2>Knowledge</h2>
	{@html post.html}

</section>

<style>
aside {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
	grid-gap: 0 var(--spacer);
}

</style>