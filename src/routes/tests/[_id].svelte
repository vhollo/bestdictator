<script context="module">
	import { findPost } from '../tests'

	export function preload(page) {
		return { post: findPost(page.params._id) }
	}
</script>

<script>
	export let post
	export let score = 0
	function _score(s) {
		score = isNaN(parseInt(s,10)) && s.startsWith('x') ? score * parseInt(s.substr(1),10) : score + parseInt(s)
	}
	function _scroll(id) {
		document.getElementById(id).scrollIntoView({behavior: 'smooth'})
	}
	/* export let max = 30 */
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
</form>
<header>
	You got… {score}<!-- /{max} --> points.<br>
	{#if score > 10}
	Now you are allowed to <button>RATE</button> your favorite DiCs.
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
	margin-top: var(--spacing);
}

input[type="radio"] { display: none; }

fieldset:not(:valid) + fieldset { display: none; }
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
	margin-top: var(--spacing);
	margin-left: var(--gutter-);
	margin-right: var(--gutter-);
	border-top: 2px solid var(--extcolor);
}

button {
	outline: 2px solid var(--maincolor);
	padding: 0 var(--gutterx);
	margin: 0 var(--guttery);
}

</style>

