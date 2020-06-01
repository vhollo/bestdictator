<script>
	import { score } from './stores.js';
	import Header_rate from '../components/headers/Header_rate.svelte';
	/* import Linking_dic from '../components/headers/Linking_dic.svelte' */
	import Dic_grid from '../components/dic-grid.svelte'
</script>

<svelte:head>
	<title>Rate Your Dictator</title>
</svelte:head>

<Header_rate />

<div>
	<section>
		<Dic_grid list="3" score={$score} />
	</section>
	<figure>
		<h1>DiC STRiP</h1>
		<img src="uploads/DiCStrip-mockup.jpg" alt="dic strip" />
		<figcaption>Design a new style for your most beloved one!</figcaption>
	</figure>
</div>

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
figure h1 {
	color: var(--maincolor);
}
figure img {
	margin: 0 auto;
}

/* figure {
	margin: var(--gutter) var(--gutter-);
} */
</style>