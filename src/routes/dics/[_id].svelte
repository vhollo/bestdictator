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
	export let changed = false

	$: average = calcaverage(post._id, post.profile, post.power)

	function _changed() {
		changed = true
	}
</script>

<svelte:head>
	<title>{post.title}</title>
	{#if post.desc}<meta name='description' content='{post.desc}'>{/if}
	</svelte:head>

<Header_dic post="{post}" />
<article>
	<h2>Bio</h2>
	<section>
		<dl><dt>Date of Birth:&ensp;</dt><dd><time>{post.birthdate || '?'}</time></dd></dl>
		{#if post.isdead || post.lost}
		<dl>
			<dt>Date of Death:&ensp;</dt>
			<dd><time>{post.deathdate || (post.lost ? 'Lost/hiding' : '?')}</time></dd>
		</dl>
		{/if}
		{#if post.cause}
		<dl>
			<dt>Cause of Death:&ensp;</dt>
			<dd>{post.cause}</dd>
		</dl>
		{/if}
		<dl>
			<dt>Country to rule:&ensp;</dt>
			<dd>{post.country}</dd>
		</dl>
	</section>
	{#if post.bio}
	{@html post.bio}
	{/if}

	<form name="rating" method="POST" on:change={_changed}>
		<input type='hidden' name='form-name' value='rating' />
		<input type='hidden' name='dic' value='{post._id}' />
		<input type='hidden' name='score' value='{$score_sum}' />
		{#if post.profile}
		<h2>Profile</h2>
			<Profile bind:data="{post.profile}" group="profile" average="{average}" names="{profile_names}" score={$score_sum} threshold={$threshold} />
		{/if}
		<label>
			Family relations
			<div style="--level:50%">
				<input name="profile[family]" type="number" min="1" max="5" value>
				<mark style="--mark:50%"></mark>
			</div>
		</label>

		{#if post.power}
		<h2>Power Indicators</h2>
			<Profile bind:data="{post.power}" group="power" average="{average}" names="{power_names}" score={$score_sum} threshold={$threshold} />
		{/if}

		{#if changed}
		<button type="submit">Revision</button>
		{/if}
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
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
	grid-gap: var(--gutterx);
}
dl {
	display: flex;
	flex-wrap: wrap;
	padding: var(--gutter);
	background-color: var(--toolbg);
	height: max-content;
}
dl:hover { background-color: var(--maincolor); }
dt, dd {
	display: inline;
}
label {
	display: none;
}
</style>