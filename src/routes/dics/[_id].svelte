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
<article>
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

	<form name="rating" netlify netlify-honeypot="power[family]" method="POST">
		{#if post.profile}
		<h2>Profile</h2>
			<Profile bind:data="{profile}" group="profile" average="{average}" names="{profile_names}" score={$score_sum} threshold={$threshold}/>
		{/if}

		{#if post.power}
		<h2>Power Indicators</h2>
			<Profile bind:data="{power}" group="power" average="{average}" names="{power_names}" score={$score_sum} threshold={$threshold}/>
		{/if}

		<label>
			Family relations
			<div style="--level:50%">
				<input name="power[family]" type=range min="1" max="5">
				<mark style="--mark:50%"></mark>
			</div>
		</label>
		<button type="submit">Revision</button>
	</form>

	<h2>Knowledge</h2>
	{@html post.html}

</article>

<ButtonTys backid="{post._id}"/>

<style>
h2 {
	text-transform: uppercase;
}
button {
	display: block;
	margin: var(--gutter) auto;
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