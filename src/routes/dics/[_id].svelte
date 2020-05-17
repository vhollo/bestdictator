<script context="module">
import {findPost} from '../dics'
import { profile_names, power_names } from '../../components/txt'

export function preload(page) {
	return { post: findPost(page.params._id) }
}
</script>

<script>

import Header_dic from '../../components/headers/header_dic.svelte'
import Profile from '../../components/profile.svelte'
export let post
let profile = post.profile
let power = post.power
let level_overall

$: sum_profile = Object.values(profile).reduce((t, n) => t + (n - 1), 0) || 0
$: sum_power = Object.values(power).reduce((t, n) => t + (n - 1), 0) || 0
$: level_overall = ((sum_profile + sum_power) / 9.6)

</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Header_dic post="{post}" level_overall="{level_overall}" />

{#if post.profile}
<h2>Profile</h2>
<aside>
	<Profile bind:data="{profile}" names="{profile_names}" />
</aside>
{/if}

<h2>Bio</h2>
<h1>{post.firstname || ''} {post.middlename || ''} {post.lastname || ''}</h1>
{#if post.bio}
<p>{@html post.bio}</p>
{/if}
<p>Date of Birth: <time>{post.birthdate || '?'}</time></p>
{#if post.isdead}
<p>Date of Death: <time>{post.deathdate || '?'}</time></p>
{/if}

{#if post.power}
<h2>Power Indicators</h2>
<aside>
	<Profile bind:data="{power}" names="{power_names}" />
</aside>
{/if}

<h2>Knowledge</h2>
<div class='content'>
	{@html post.html}
</div>

<style>
aside {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
	grid-gap: 0 2rem;
	@apply shadow-md;
}

</style>