<script context="module">
	import { findPost } from '../tests'
	export function preload(page) {
		return { post: findPost(page.params._id) }
	}
</script>

<script>
	import { score, score_sum, threshold, bckid } from '../stores.js';
	export let post
	//$score[post._id].set(0)
	$score[post._id] = 0
	function _score(s) {
		if (String(s).startsWith('x') || String(s).startsWith('*')) {
			console.log($score_sum, $score[post._id], parseFloat(s.substr(1), 10))
			$score[post._id] = parseInt($score[post._id]) * parseFloat(s.substr(1), 10)
		} else {
			console.log($score_sum, $score[post._id], parseInt(s, 10))
			$score[post._id] += parseInt(s, 10)
		}
		//$score[post._id].set(isNaN(parseInt(s,10)) && s.startsWith('x') ? $score[post._id] * parseFloat(s.substr(1),10) : $score[post._id] + parseInt(s,10))
	}
	function _scroll(id) {
		document.getElementById(id).scrollIntoView({behavior: 'smooth'})
	}
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<article>
	{@html post.html}
</article>

<form>
	{#each post.questions as q, i}
	<fieldset>
		<legend id="q-{i}">{q.q}</legend>
		{#each q.choices as ch, j}
		<input type="radio" name="answer-{i}" id="answer-{i}-{j}" value="{ch.score}" required on:change={_score(ch.score),_scroll(`q-${i}`)}>
		<label for="answer-{i}-{j}">
			{ch.choice}
			<aside>{ch.bully} <br><small>({ch.score} points)</small></aside>
		</label>
		{/each}
	</fieldset>
	{/each}
	<!-- <fieldset>
		<legend id="q-{i+1}">Is Cartman your favorite South Park character?</legend>
		<input type="radio" name="answer-{i+1}" id="answer-{i+1}-0" value="x0" required>
		<label for="answer-{i+1}-0">
			Absoulutely
			<aside>gotcha boy <br><small>(x0 points)</small></aside>
		</label>
		<input type="radio" name="answer-{i+1}" id="answer-{i+1}-1" value="x0" required>
		<label for="answer-{i+1}-1">
			Absoulutely not
			<aside>gotcha baby <br><small>(x0 points)</small></aside>
		</label>
	</fieldset> -->
</form>

<header>
	You got… {$score[post._id]} points.<br>
	{@debug score}
	{#if $score_sum >= $threshold}
	<a href="/dics/{$bckid}">Now you've proven your authoriter values. You are allowed to <button>RATE</button> your favorite DiCs.</a>
	{/if}
</header>

<style>

form {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: var(--gutterx);
}
fieldset {
	display: contents;
}
label {
	height: max-content;
}
legend {
	font-size: var(--midsize);
	text-transform: uppercase;
	grid-column: 1 / 3;
	margin-top: var(--spacer);
}

input[type="radio"] { display: none; }

fieldset:not(:valid) + fieldset, fieldset(:last-of-type) { display: none; }
input:valid ~ label {
	pointer-events: none;
	user-select: none;
	background-color: var(--infobg);
	color: var(--toolbg);
}

label {
	display: block;
	position: relative;
	cursor: pointer;
	padding: var(--gutter);
	background-color: var(--toolbg);
}
/* Hover/keyboard focus should change the background colour of the item, if not yet answered */
input:not(:checked) ~ label:hover, input:not(:checked):focus ~ label { background-color: var(--maincolor); }

/* Show any extra explanatory text */
aside { display: none }
input:checked + label aside { 
	display: block;
	font-size: var(--midsize);
	line-height: var(--headsize);
}

input:checked + label { 
	background-color: var(--maincolor);
	color: inherit;
}

header {
	position: sticky;
	bottom: 0;
	padding: var(--gutter);
	background-color: var(--bgcolor);
	margin-top: var(--spacer);
	/* margin-left: var(--gutter2-);
	margin-right: var(--gutter2-); */
	border-top: 2px solid var(--maincolor);
}

</style>

