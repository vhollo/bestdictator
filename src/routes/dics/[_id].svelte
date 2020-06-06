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
	<section>
		<dl><dt>Date of Birth: </dt><dd><time>{post.birthdate || '?'}</time></dd></dl>
		{#if post.isdead || post.lost}
		<dl><dt>Date of Death: </dt><dd><time>{post.deathdate || (post.lost ? 'Lost/hiding' : '?')}</time></dd></dl>
		{/if}
		{#if post.cause}
		<dl><dt>Cause of Death: </dt><dd>{post.cause}</dd></dl>
		{/if}
	</section>
	{#if post.bio}
	{@html post.bio}
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
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	grid-gap: 0 var(--gutterx);
}
article :global(p) {
	margin-bottom: var(--gutter);
}
section {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
	grid-gap: var(--gutterx);
}
dl {
	display: block;
	position: relative;
	padding: var(--gutter);
	background-color: var(--toolbg);
	height: max-content;
}
dl:hover { background-color: var(--maincolor); }
dt, dd {
	display: inline;
}
</style>