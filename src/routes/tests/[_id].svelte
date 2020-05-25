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
		score = isNaN(parseInt(s,10)) && s.startsWith('x') ? score * parseInt(s.substr(1),10) : score + s
	}
	function _scroll(id) {
console.log(id, document.getElementById(id))
		document.getElementById(id).scrollIntoView({behavior: 'smooth'})
	}
//console.log(post)
	export let max = 30
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
			<h3 class="reveal">{ch.bully} <br><small>({ch.score} points)</small></h3>
		</label>
		{/each}
	</fieldset>
	{/each}
<!-- 
	<button type="submit">Submit answers</button>
 -->
</form>
<aside>
	You got… {score}/{max} points.<br>
	{#if score > 10}
	Now you are allowed to <button>RATE</button> your favorite DiCs.
	{/if}
</aside>

<style>

/* article, fieldset {
	margin-bottom: 2rem;
} */
form {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: .5rem;
}
fieldset {
	display: contents;
}
label {
	height: max-content;
}
legend {
	font-size: 1.5rem;
	text-transform: uppercase;
	grid-column: 1 / 3;
	margin-top: 4rem;
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
	padding: 0.75rem 1.25rem;
	background-color: var(--toolbg);
}
/* Hover/keyboard focus should change the background colour of the item, if not yet answered */
input:not(:checked) ~ label:hover, input:not(:checked):focus ~ label { background-color: var(--maincolor); }

/* Show any extra explanatory text */
.reveal { display: none }
input:checked + label .reveal { display: block; }

input:checked + label { 
	background-color: var(--maincolor);
	color: inherit;
}

aside {
	position: sticky;
	bottom: 0;
	padding: 1rem;
	background-color: var(--bgcolor);
	margin-top: 6rem;
	margin-left: -1rem;
	margin-right: -1rem;
	border-top: 2px solid var(--extcolor);
}

button {
	outline: 2px solid var(--maincolor);
	padding: 0 .5rem;
	margin: 0 .25rem;
}
/* 
form { counter-reset: count; counter-reset: score; }
fieldset { counter-increment: count;}
input:checked ~ :global(u) { counter-increment: score; }
.score:after { content:counter(score) "/" attr(data-max-score) }
 */

</style>

