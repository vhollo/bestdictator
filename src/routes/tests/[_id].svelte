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
					<span class="icon"></span>
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
input:not(:checked) ~ label:hover, input:not(:checked):focus ~ label { background-color: #ec19ec }

/* Show any extra explanatory text */
input:checked ~ label .reveal { display: block; }

/* Show the icon for the selected answer */
input:checked ~ label { 
	background-color: var(--maincolor);
}
/* input:checked ~ label .icon { display: inline-block; } */

form:valid .message { display: block; }

form { counter-reset: count; counter-reset: score; }
fieldset { counter-increment: count;}
input:checked ~ :global(u) { counter-increment: score; }

.score:after { content:counter(score) "/" attr(data-question-count) }

input:valid ~ label {
	pointer-events: none;
	user-select: none;
}
/* input:valid:checked ~ label {
	
}
 */

/* Labels not clickable on results page */
.is-results label { cursor: default }

/* Highlight the correct answer in light green */
.is-results label.is-correct { background-color: rgba(61, 181, 64, 0.6) }

/* Highlight chosen answers in red */
.is-results label.selected { color: #ffffff; background-color: #c70000 }

/* Highlight *correctly* chosen answers in bright green */
.is-results label.is-correct label.selected { background-color: #3db540; }

/* Show extra explanatory text */
.reveal { display: none }
.is-results .reveal { display: block }

/* Show the icon for the selected answer (tick or cross) */
.is-results label.selected .icon { display: inline-block }

/* Do show the results box on the results page */
.is-results .message { display: block }


</style>


<!-- 
<style lang="scss">
// ********************* quiz layout *********************
// see bottom for auto-reveal stuff

$gs-baseline: 1rem;
$gs-gutter: 1rem;

$brightness-97: var(--txtcolor);
$brightness-7: var(--bgcolor);
$brightness-86: var(--maincolor);
$brightness-46: var(--extcolor);
$opinion-bright: var(--maincolor);
$news-main: var(--maincolor);
$brand-main: var(--maincolor);
$green-bold: green;



@mixin clearfix {
  clear: both;
}
@mixin u-h {
	visibility: none;
}


.atom-quiz {
    counter-reset: quiz-question;
    margin: 0; // override pasteup
}

// general question block (fieldset)
.atom-quiz__question {
    margin-bottom: $gs-baseline * 2;
    list-style-type: none;
    border: 0;
    padding: 0;

    // Overrides capi styling for figure elements in _from-content-api.scss.
    & figure.element {
        margin: 0;
        transition: opacity 100ms;
    }
}

// fieldset > legend
.atom-quiz__question-text {
    margin-bottom: $gs-baseline;
    display: inline-block;

    &:before {
        counter-increment: quiz-question;
        content: counter(quiz-question) '.';
        padding-right: .5ch;
    }
}

// image attached to the question, rather than an answer
.atom-quiz__question-image {
    margin-bottom: $gs-baseline / 2;
}

// space answers out
.atom-quiz__answers {
    @include clearfix;
}

.atom-quiz__answer {
    clear: both;

    & + & {
        padding-top: $gs-baseline * .5;
    }
}

.atom-quiz__answer--image {
    width: 50%;
    float: left;

    &:nth-child(2) {
        padding-top: 0;
    }

    &:nth-child(even) {
        clear: none;
    }
}

// [type=radio]
// we use the radio button for a bit of state and for screen readers etc,
// but we don't want to see it
.atom-quiz__answer__input {
    @include u-h;
}

// [type=radio] + label
.atom-quiz__answer__item {
    background-color: $brightness-97;
    transition: background-color 100ms;
    display: block;
    position: relative;
    cursor: pointer;

    // make it look un-clickable
    .atom-quiz--is-results & {
        cursor: default;
    }

    // hightlight for when answer is selected, but in unknown state (gold)
    // i.e. awaiting round trip
    // [type=radio]input:checked + label
    input:checked + & {
        cursor: default; // make it look un-clickable
        background-color: $opinion-bright;

        .element-image {
            opacity: .8;
        }

        &:before {
            background-color: $brightness-7;
            box-shadow: 0px 0px 0px 1px $brightness-7, inset 0px 0px 0px 3px $opinion-bright;
        }
    }

    // highlight state (darker grey)
    .atom-quiz--is-not-results input:not(:checked) + &:hover,
    .atom-quiz--is-not-results input:not(:checked):focus + & {
        background-color: $brightness-86;

        &:before {
            background-color: $brightness-46;
            box-shadow: 0px 0px 0px 1px $brightness-46, inset 0px 0px 0px 3px $brightness-86;
        }
    }
}

@mixin atom-quiz__answer__item.selected--is-incorrect {
    color: #ffffff;
    background-color: $news-main;

    .element-image {
        opacity: .8;
    }

    .atom-quiz__icon {
        display: inline-block;
    }
}

@mixin atom-quiz__answer__item.selected.is-correct {
    background-color: $green-bold;

    .element-image {
        opacity: 1;
    }

    .atom-quiz__reveal {
        color: #ffffff;
        padding-left: 28px;
        padding-top: 0;
        min-height: auto;
    }
}

@mixin atom-quiz__answer__item.is-correct {
    background-color: fade-out($green-bold, .4);

    .element-image {
        opacity: .8;
    }
}

// correct/incorrect highlighting
.atom-quiz--is-results.atom-quiz--knowledge {

    // default highlight for the actual correct answer (light-green)
    .atom-quiz__answer__item.is-correct {
        @include atom-quiz__answer__item.is-correct;
    }

    // default hightlight for the selected answer (red)
    .atom-quiz__answer__item.selected {
        @include atom-quiz__answer__item.selected--is-incorrect;
    }

    // overide both defaults if you selected the correct answer (bright green)
    .atom-quiz__answer__item.is-correct.atom-quiz__answer__item.selected {
        @include atom-quiz__answer__item.selected.is-correct;
    }
}

.atom-quiz__answer__item--text {
    padding: $gs-baseline $gs-gutter;

    // show a fake, stylised radio button on personality quiz answers
    .atom-quiz--personality &:before {
        content: '';
        height: 1em;
        width: 1em;
        border-radius: 1em;
        display: inline-block;
        position: absolute;
        left: 1em;
        top: 1em;
        box-shadow: 0px 0px 0px 1px $brightness-86;
        transition: background-color 100ms, box-shadow 50ms;
    }

    input:checked + &:before {
        background-color: $brightness-7;
        box-shadow: 0px 0px 0px 1px $brightness-7, inset 0px 0px 0px 3px $opinion-bright;
    }

    // highlight state (darker grey)
    .atom-quiz--is-not-results input:not(:checked) + &:hover:before,
    .atom-quiz--is-not-results input:not(:checked):focus + &:before {
        background-color: $brightness-46;
        box-shadow: 0px 0px 0px 1px $brightness-46, inset 0px 0px 0px 3px $brightness-86;
    }

    // don't show the fake radio button on a personality quiz results page
    .atom-quiz--is-results &:before {
        display: none;
    }

    .atom-quiz--is-not-results.atom-quiz--personality & {
        padding-left: 3em;
    }
}

.atom-quiz__answer__item--image {
    padding: $gs-gutter * .5;
    box-sizing: border-box;

    // allow IE to handle images in labels
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    &:before {
        display: none; // hide the fake radio button on personality quizzes
    }

    .atom-quiz__answer:nth-child(odd) & {
        margin-right: $gs-baseline * .25; // keeping spacing the same around all edges
    }

    .atom-quiz__answer:nth-child(even) & {
        margin-left: $gs-baseline * .25; // keeping spacing the same around all edges
    }
}

.atom-quiz__icon {
    display: none;

    svg {
        height: 16px;
        width: 16px;
    }
}

.atom-quiz__icon--text {
    position: relative;
    top: 2px; // magic numbers to align text with svg icon.
    padding-right: 8px;
    margin-left: -2px;
}

.atom-quiz__icon--image {
    padding-top: $gs-baseline;

    &:after {
        position: relative;
        top: -2px; // magic numbers to align text with svg icon.
        left: 8px;
        content: 'Incorrect';
    }

    .atom-quiz__answer__item.is-correct &:after {
        content: 'Correct';
    }
}

.atom-quiz__reveal {
    
    display: none;
    color: $brightness-7;

    .atom-quiz--is-results & {
        display: block;
    }

    .atom-quiz__icon--image + & {
        padding-top: $gs-baseline;
        min-height: $gs-baseline * 2;
    }
}

.atom-quiz__message {
    display: none;
    border-top: 1px solid $brightness-86;
    background-color: $brightness-97;
    padding: $gs-baseline / 2 $gs-gutter * 2 / 3;

    .atom-quiz--is-results & {
        display: block;
    }
}

.atom-quiz__message--top {
    border-top: $gs-baseline solid #ffffff;
    margin-bottom: $gs-baseline;
}

.atom-quiz__score-message,
.atom-quiz__bucket-message {
    color: $brightness-46;
}

.atom-quiz__score {
    //@include fs-headline(10);
    color: $brand-main;
    display: block;
}

.atom-quiz__share {
    border-top: 1px solid $brightness-86;
    padding-top: $gs-baseline * 2 / 3;
    margin-top: $gs-baseline;
}

.atom-quiz__cta {
    padding-bottom: $gs-baseline;
}

// ********************* end quiz layout ******************


// ********************* auto-reveal *********************
// if we can style based on form validity, we can reveal
// the answers for knowlegde quizzes automatically
.atom-quiz--instant-reveal:invalid,
.atom-quiz--instant-revealform:valid {
    // create additional counter to keep track of correct results
    counter-reset: quiz-question score;

    // hide the submit button
    [type=submit] {
        display: none;
    }

    // once we have a selection ([required]form:valid), kill mouse input,
    // highlight the correct answer and show the reveal text
    // .atom-quiz__answer__input[required]form:valid
    form:valid {
        & {
            user-select: none;
        }

        & + .atom-quiz__answer__item {
            pointer-events: none;
        }

        .atom-quiz__answer__item.is-correct {
            @include atom-quiz__answer__item.is-correct;
        }

        .atom-quiz__reveal {
            display: block;
        }
    }

    // assume selected asnwer is wrong
    input:checked + .atom-quiz__answer__item {
        @include atom-quiz__answer__item.selected--is-incorrect;
    }

    // if its correct, override style and increment correct result counter
    input:checked + .atom-quiz__answer__item.is-correct {
        @include atom-quiz__answer__item.selected.is-correct;
        counter-increment: score;
    }

    // update the results
    .atom-quiz__score:after {
        content: counter(score) '/' attr(data-question-count);
    }

    .atom-quiz__bucket-message {
        display: none;
    }
}

// when the whole form is valid (i.e all fields have an answer),
// show the results
.atom-quiz--instant-revealform:valid .atom-quiz__message {
    display: block;
}

// ********************* end auto reveal ******************
</style> -->