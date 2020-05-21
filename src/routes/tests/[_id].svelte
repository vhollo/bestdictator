<script context="module">
	import { findPost } from '../tests'

	export function preload(page) {
		return { post: findPost(page.params._id) }
	}
		let repeat = (n, t) => t.repeat(n)
</script>

<script>
	export let post
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class='content'>
	{@html post.html}
</div>

<form>
	{#each post.questions as q, i}
	<fieldset>
		<legend><h2>{q.q}</h2></legend>
		<div class="answers">
			{#each q.answers as a, j}
			<div class="answer">
				<input type="radio" name="answer-{i}" id="answer-{i}-{j}" value="{a.value}" required>
				{@html repeat(a.value, `<u></u>`)}
				<label for="answer-{i}-{j}">
					{a.a}
					<h3 class="reveal">{a.bull}</h3>
				</label>
			</div>
			{/each}
		</div>
	</fieldset>
	{/each}
<!-- 
	<button type="submit">Submit answers</button>
 -->
	<div class="message">
		<div class="score-message">
			You got…
			<span class="score" data-question-count="6"></span>
			points.
		</div>
	</div>

</form>

<style>
input[type="radio"] { display: none; }

.answer {
	margin: 0 0 1rem 0;
}

fieldset + fieldset { display: none; }
fieldset:valid + fieldset { display: block; }
label {
		/* background-color: var(--txtcolor);
		color: var(--bgcolor); */
    display: block;
    position: relative;
    cursor: pointer;
		padding: 0.75rem 1.25rem;
		border-width: 2px;
}
/* Hover/keyboard focus should change the background colour of the item, if not yet answered */
input:not(:checked) ~ label:hover, input:not(:checked):focus ~ label { background-color: var(--toolbg); }

/* Show any extra explanatory text */
.reveal { display: none }
input:checked ~ label .reveal { display: block; }

input:checked ~ label { 
	background-color: var(--maincolor);
}

form:valid .message { display: block; }

form { counter-reset: count; counter-reset: score; }
fieldset { counter-increment: count;}
input:checked ~ :global(u) { counter-increment: score; }

.score:after { content:counter(score) "/" attr(data-question-count) }

input:valid ~ label {
	pointer-events: none;
	user-select: none;
}

</style>

