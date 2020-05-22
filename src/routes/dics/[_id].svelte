<script context="module">
import _ from 'lodash'
import {posts, findPost, calcaverage} from '../dics'
import { profile_names, power_names } from '../../components/txt'

export function preload(page) {
	return { 
		post: findPost(page.params._id)
	}
}
</script>

<script>
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
	<!-- {@debug profile} -->
<h2>Bio</h2>
<p>Date of Birth: <time>{post.birthdate || '?'}</time></p>
{#if post.isdead}
<p>Date of Death: <time>{post.deathdate || '?'}</time></p>
{/if}
<p>{@html post.bio}</p>

{#if post.profile}
<h2>Profile</h2>
<section>
	<Profile bind:data="{profile}" average="{average}" names="{profile_names}" />
</section>
{/if}

<!-- 
<h1>{post.firstname || ''} {post.middlename || ''} {post.lastname || ''}</h1>
{#if post.bio}
<p>{@html post.bio}</p>
{/if}
<p>Date of Birth: <time>{post.birthdate || '?'}</time></p>
{#if post.isdead}
<p>Date of Death: <time>{post.deathdate || '?'}</time></p>
{/if}
 -->
{#if post.power}
<h2>Power Indicators</h2>
<section>
	<Profile bind:data="{power}" average="{average}" names="{power_names}" />
</section>
{/if}

<h2>Knowledge</h2>
<div class='content'>
	{@html post.html}
</div>

<style>
section {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
	grid-gap: 0 2rem;
}

</style>