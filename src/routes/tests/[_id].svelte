<script context="module">
	import { findPost } from '../tests'

	export function preload(page) {
		return { post: findPost(page.params._id) }
	}
	let repeat = (n, t) => t.repeat(n)
</script>

<script>
	export let post
	export let score = 0
	function _score(s) {
		score = isNaN(parseInt(s,10)) && s.startsWith('x') ? score * parseInt(s.substr(1),10) : score + s
		console.log(score,s)
	}
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div>
	{@html post.html}
</div>

<form>
	{#each post.questions as q, i}
	<fieldset>
		<legend>{q.q}</legend>
		<div class="answers">
			{#each q.choices as ch, j}
			<div>
				<input type="radio" name="answer-{i}" id="answer-{i}-{j}" value="{ch.score}" required on:change={_score(ch.score)}>
				<!-- {@html repeat(ch.score, `<u></u>`)} -->
				<label for="answer-{i}-{j}">
					{ch.choice}
					<h3 class="reveal">{ch.bully} ({ch.score} points)</h3>
				</label>
			</div>
			{/each}
		</div>
	</fieldset>
	{/each}
<!-- 
	<button type="submit">Submit answers</button>
 -->
	<p class="message">
		You got… {score}/30 points.
	</p>
</form>

<style>

legend {
	font-size: 1.5rem;
	margin-top: 2rem;
	text-transform: uppercase;
}
.answers {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
	grid-gap: .5rem;
}

input[type="radio"] { display: none; }

fieldset + fieldset { display: none; }
fieldset:valid + fieldset { display: block; }
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
	height: 100%;
}
/* Hover/keyboard focus should change the background colour of the item, if not yet answered */
input:not(:checked) ~ label:hover, input:not(:checked):focus ~ label { background-color: var(--maincolor); }

/* Show any extra explanatory text */
.reveal { display: none }
input:checked ~ label .reveal { display: block; }

input:checked ~ label { 
	background-color: var(--maincolor);
	color: inherit;
}

.message {
	position: sticky;
	bottom: 0;
	padding: 1rem 0;
	background-color: var(--bgcolor);
	margin-top: 1rem;
}
/* 
form { counter-reset: count; counter-reset: score; }
fieldset { counter-increment: count;}
input:checked ~ :global(u) { counter-increment: score; }
.score:after { content:counter(score) "/" attr(data-max-score) }
 */

</style>

