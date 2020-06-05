<script context="module">
	import IconDic from '../components/svg/dic-icon.svelte';
	import Header_landing from '../components/headers/Header_landing.svelte';
</script>
<script>
	import { score } from './stores.js';
	import Dic_grid from '../components/dic-grid.svelte'
</script>

<svelte:head>
	<title>Rate Your Dictator</title>
</svelte:head>

<Header_landing />

<div>
	<section>
		<Dic_grid list="3"/>
	</section>
	<figure>
		<h1>DiC STRiP</h1>
		<img src="uploads/DiCStrip-mockup.jpg" alt="dic strip" />
		<figcaption>Design a new style for your most beloved one!</figcaption>
		<p>Coming to your country soon</p>
	</figure>
</div>

<figure>
	<IconDic icon="crown" />
	<figcaption>
		<a href="/tests/could-i-be-a-dictator">
			<h2>Could I be a Dictator?</h2>
			<p>Complete our test to challange your authoriter values</p>
		</a>
	</figcaption>
</figure>

<style>
div {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	margin: 0 var(--gutter2-);
	padding-bottom: var(--gutter2);
	background-color: var(--infobg);
	--maskcolor: var(--infobg);
}
div:before {
	content: '';
	/* position: absolute;
	left: calc(50% - var(--guttery));
	top: var(--gutter2);
	bottom: var(--gutter); */
	margin-top: var(--gutter2);
	border-right: var(--gutterx) dotted var(--toolbg);
	margin-right: var(--gutterx-);
	/* flex: 0 0 0; */
	order: 1;
}
div section {
	flex: 1 0 20rem;
	margin: 0 var(--gutter2);
	order: 0;
}
div figure {
	flex: 1 0 10rem;
	margin: 0 var(--gutter2);
	text-align: center;
	order: 2;
}
div figure h1 {
	color: var(--maincolor);
}
div figure img {
	margin: 0 auto;
}
div figure p {
	color: var(--maincolor);
}
div + figure {
	display: flex;
	align-items: center;
	background-color: var(--bgcolor);
}
div + figure :global(svg) {
	width: var(--toolsize);
	height: auto;
	fill: var(--midtone);
}
div + figure figcaption {
	margin-left: var(--gutter2);
	flex-grow: 1;
	color: var(--maincolor);
}
div + figure figcaption h2 {
	margin-bottom: 0;
	color: var(--txtcolor);
}
</style>