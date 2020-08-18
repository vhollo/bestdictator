<script context="module">
	import { FirebaseApp, User, Doc, Collection } from "sveltefire";
	import { app, db } from "../../db";

	import { onMount } from 'svelte'
	import { posts, findPost, calcaverage } from '../../dics'
	import { profile_names, power_names } from '../../components/txt'
	import { score_sum, threshold } from '../../stores.js';

	import Header_dic from '../../components/headers/Header_dic.svelte'
	import Profile from '../../components/Profile.svelte'
	import Could_I from '../../components/Could-I.svelte';

	export function preload(page) {
		return {
			post: findPost(page.params._id)
		}
	}

	const firebaseConfig = {
		apiKey: "AIzaSyD3s7aGtMrrXDSnXi-_F1VSmUspINoOC0A",
		authDomain: "best-dictator.firebaseapp.com",
		databaseURL: "https://best-dictator.firebaseio.com",
		projectId: "best-dictator",
		storageBucket: "best-dictator.appspot.com",
		messagingSenderId: "711065175489",
		appId: "1:711065175489:web:bd836a261972ef82015b40"
	};

	let globalFirebase;
</script>

<script>
	onMount(() => {
		globalFirebase = app;
		if (!app.apps.length) {
			app.initializeApp(firebaseConfig);
		}
	})

	export let post
	export let changed = false
	//export let rates = {profile: [ {} ], power: [ {} ] }
	let postRef, userauth

	$: average = calcaverage(post._id, post.profile, post.power)
	/* 
		function _getrates(e) {
			let pr = {}, po = {}, data = e.detail.data
			for (let i in data) {
				for (let k in data[i].profile) {
					pr[k] = (pr[k] || 0) + data[i].profile[k]
				}
				for (let k in data[i].power) {
					po[k] = (po[k] || 0) + data[i].power[k]
				}
			}
			//let prsort = Object.keys(pr).sort()
			//let posort = Object.keys(po).sort()
			for (let k in pr) post.profile[k] = pr[k] / data.length
			for (let k in po) post.power[k] = po[k] / data.length
		}
	 */
	function _changed() {
		changed = true
		//console.log('signInAnonymously')
		firebase.auth().signInAnonymously().catch(function (error) {
			console.error(error);
		});
	}

	function _changed_not() {
		changed = false
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

	<form on:change={_changed}>
		<input type='hidden' name='dic' value='{post._id}' />
		<input type='hidden' name='score' value='{$score_sum}' />

		{#if post.profile}
		<h2>Profile</h2>
		<Profile bind:data="{post.profile}" group="profile" average="{average}" names="{profile_names}" score={$score_sum} threshold={$threshold} />
		{/if}

		{#if post.power}
		<h2>Power Indicators</h2>
		<Profile bind:data="{post.power}" group="power" average="{average}" names="{power_names}" score={$score_sum} threshold={$threshold} />
		{/if}

		{#if globalFirebase}
		<FirebaseApp firebase={globalFirebase}>

			<!-- 2. 😀 Get the current user -->
			<User let:user let:auth bind:auth={userauth}>
				<p>Howdy <em>{user.uid}</em></p>
			
				<button type="button" on:click={()=> auth.signOut()}>Sign Out</button>
			
				<div slot="signed-out">
					{#if changed}
					!
					{/if}
					<button type="button" on:click={()=> auth.signInAnonymously()}>
						Sign In Anonymously
					</button>
				</div>
			
				<!-- 3. 📜 Get a Firestore document owned by a user -->
				<Doc path={`${post._id}/${user.uid}`} let:data={rate} let:ref={postRef}>
			
					{#if changed}
					<p>You should push this red button to</p>
					<button type="button" on:click={()=> postRef.set({
						profile: post.profile,
						power: post.power,
						date: Date.now(),
						score: $score_sum,
						approved: false
						}) && _changed_not()}>Commit</button>
					{:else}
					<p>
						{rate.approved ? 'Approved' : 'Unverified'} rating created on <em>{new Date(rate.date).toLocaleDateString(undefined, {
							year: "numeric", month: "short", day: "numeric" })}</em>
						with {rate.score} test points.
					</p>
					{/if}
			
					<span slot="loading">Loading rate…</span>

					<span slot="fallback">
						{#if changed}
						<p>You should push this red button to</p>
						<button type="button" on:click={()=> postRef.set({
							profile: post.profile,
							power: post.power,
							date: Date.now(),
							score: $score_sum,
							approved: false
							}) && _changed_not()}>Commit</button>
						{:else}
						<p>You didn't rate this DiC yet.</p>
						{/if}
					</span>
				</Doc>
				
			</User>

		</FirebaseApp>
		{/if}

	</form>

	<h2>Knowledge</h2>
	{@html post.html}

</article>

<Could_I backid={post._id} />


<style>
h2 {
	text-transform: uppercase;
}
p {
	text-align: center;
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
	grid-gap: var(--gutter);
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