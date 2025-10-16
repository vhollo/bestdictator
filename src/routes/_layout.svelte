<script context="module">
	import Tailwindcss from '../components/Tailwindcss.svelte'
	import Nav from '../components/Nav.svelte'
	import { onMount } from 'svelte'
	import { tick } from 'svelte';
	/* const firebaseConfig = {
		apiKey: "AIzaSyD3s7aGtMrrXDSnXi-_F1VSmUspINoOC0A",
		authDomain: "best-dictator.firebaseapp.com",
		databaseURL: "https://best-dictator.firebaseio.com",
		projectId: "best-dictator",
		storageBucket: "best-dictator.appspot.com",
		messagingSenderId: "711065175489",
		appId: "1:711065175489:web:bd836a261972ef82015b40"
	}; */
	/* import { FirebaseApp, User, Doc, Collection } from "sveltefire"; */
	/* import { app, db } from "../db"; */
</script>
<script>
	/* let globalFirebase; */
	onMount(async () => {

/* 		globalFirebase = firebase;
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
 */
	/* if (process.browser) {
		client = await import("../firebase/firebase.js");
		// loading firebase stuff here with client.db or client.auth 
		// which are exported in the firebase.js
	} */

		/* MOBILE VH HACK */
		let vh = window.innerHeight
		document.documentElement.style.setProperty('--vh', `${vh}px`)
		window.addEventListener('resize', async () => {
			await tick();
			let vh = window.innerHeight
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		})
	})
	export let segment
</script>
<Tailwindcss />

<Nav {segment} />

<main>
	<!-- {#if globalFirebase}
	<FirebaseApp firebase={globalFirebase}> -->
	<slot></slot>
	<!-- </FirebaseApp>
	{/if} -->
</main>

<footer>
	<a href="mailto:dev@bestdictator.com"><small>The&nbsp;Dictatorists</small></a>
</footer>

<style>
main {
	position: relative;
	background-color: var(--bgcolor);
	padding: 0 var(--gutter);
	border-bottom: 2px solid var(--extcolor);
	min-height: calc(var(--vh, 100vh) - 7rem);
	display: flow-root;
	margin-top: 4rem;
	margin-bottom: 4rem;
	bottom: 4rem;
	z-index: 1;
}
footer {
	/* position: static; */
	min-height: 4rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--navbg);
	bottom: 0;
	left: 0;
	right: 0;
	/*max-width: 64em;*/
	/*margin: 0 auto;*/
	overflow-y: visible;
	position: fixed;
	z-index: 0;
}
@media screen and (min-width: 40rem) {
	main {
		padding: 0 var(--gutter2);
	}
}
</style>