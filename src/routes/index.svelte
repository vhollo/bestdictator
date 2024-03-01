<script context="module">
	import IconDic from '../components/svg/dic-icon.svelte';
	import Header_landing from '../components/headers/Header_landing.svelte';
	import Could_I from '../components/Could-I.svelte';
	import Dic_top from '../components/Dic-top.svelte'
	import { score } from '../stores.js';
</script>
<script>
</script>

<svelte:head>
	<title>Rate Your Dictator</title>
</svelte:head>

<Header_landing />

<div>
	<section>
		<Dic_top list="3"/>
	</section>
	<figure>
		<h1>DiC STRiP</h1>
		<img src="uploads/DiCStrip-mockup.jpg" alt="dic strip" />
		<figcaption>Design a new style for your most beloved one!<p>* COMING LATER *</p></figcaption>
	</figure>
</div>

<Could_I/>

<style>
div {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	margin: 0 var(--gutter-);
	padding-bottom: var(--gutter2);
	/*background-color: var(--infobg);*/
	--maskcolor: var(--infobg);
	overflow-x: hidden;
}
div::before {
	content: '';
	margin-top: var(--gutter2);
	margin-left: var(--gutterx-);
	margin-right: var(--gutterx-);
	border-right: var(--gutterx) dotted var(--toolbg);
	order: 1;
}
section {
	flex: 1 0 20rem;
	margin: 0 var(--gutter2);
	order: 0;
}
figure {
	flex: 1 0 10rem;
	margin: 0 var(--gutter2);
	text-align: center;
	order: 2;
}
h1 {
	color: var(--maincolor);
}
img {
	margin: 0 auto;
}
p {
	color: var(--maincolor);
}

@media screen and (min-width: 40rem) {
	div {
		margin: 0 var(--gutter2-);
	}
}
</style>