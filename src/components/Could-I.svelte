<script context="module">
	import IconDic from './svg/dic-icon.svelte';
	import ButtonTys from './button-tys.svelte'
</script>
<script>
	import { score_sum } from '../routes/stores.js';
	export let backid = ''
</script>

<ButtonTys backid={backid} />
<figure>
	<IconDic icon="crown" data="{$score_sum}" />
	<figcaption>
		<a href="/tests/could-i-be-a-dictator">
			<h2>Could I be a Dictator?</h2>
			<p>Complete our test to challange your authoriter values</p>
		</a>
	</figcaption>
</figure>

<style>
	figure {
		display: flex;
		align-items: flex-end;
		padding: var(--gutter) 0;
	}
	figure :global(svg) {
		width: var(--toolsize);
		height: auto;
		fill: var(--midtone);
	}
	figure figcaption {
		margin-left: var(--gutter2);
		flex-grow: 1;
		color: var(--maincolor);
	}
	figure figcaption h2 {
		margin: 0;
		color: var(--txtcolor);
	}

</style>