<script context="module">
import _ from 'lodash'
import {posts, findPost} from '../dics'
import { profile_names, power_names } from '../../components/txt'

export function preload(page) {
	return { 
		post: findPost(page.params._id)
	}
}
export function calcrank(_id, level) {
	let lev = []
	for (let p of posts) {
		if (p._id === _id) {
			lev.push({ id: _id, level: level })
		} else {
			lev.push({ id: p._id, level: ((Object.values(p.profile).reduce((t, n) => t + (n - 1), 0) + Object.values(p.power).reduce((t, n) => t + (n - 1), 0)) / 9.6) })
		}
	}
	lev.sort((a, b) => parseFloat(b.level) - parseFloat(a.level));
	//lev = _.chain(lev).orderBy('level', 'desc')
	let i = 1
	for (let [key, value] of Object.entries(lev)) {
		if (lev[key].id == _id) return i //+ '.'
		i++
	}
	return '?'
}
export function calcaverage(_id, profile, power) {
	let a = {},
		av = {},
		i = 0
	for (let p of posts) {
		if (p._id === _id) {
			p.profile = profile
			p.power = power
		}
		for (let [key, value] of Object.entries(p.profile)) {
			//for (let [key, value] in p.profile) {
			a[key] = (a[key] || 0) + value
		}
		for (let [key, value] of Object.entries(p.power)) {
			//for (let [key, value] in p.power) {
			a[key] = (a[key] || 0) + value
		}
		i++
	}
	for (let [key, value] of Object.entries(a)) {
		av[key] = value / i
	}
	return av
}

</script>

<script>
import Header_dic from '../../components/headers/Header_dic.svelte'
import Profile from '../../components/Profile.svelte'
export let post
let profile = post.profile
let power = post.power
$: sum_profile = Object.values(profile).reduce((t, n) => t + (n - 1), 0)
$: sum_power = Object.values(power).reduce((t, n) => t + (n - 1), 0)
$: level_overall = ((sum_profile + sum_power) / 9.6)

$: average = calcaverage(post._id, profile, power)

$: rank = calcrank(post._id, level_overall)

</script>

<svelte:head>
	<title>{post.title}</title>
	{#if post.desc}<meta name='description' content='{post.desc}'>{/if}
	

</svelte:head>

<Header_dic post="{post}" level_overall="{level_overall}" rank="{rank}" />

{#if post.profile}
<h2>Profile</h2>
<aside>
	<Profile bind:data="{profile}" average="{average}" names="{profile_names}" />
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
	<Profile bind:data="{power}" average="{average}" names="{power_names}" />
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
}

</style>