<script context="module">
	import IconDic from './svg/dic-icon.svelte';
	import ButtonTys from './button-tys.svelte'
</script>
<script>
	import { score_sum, threshold } from '../stores.js';
	export let backid = ''
</script>

<ButtonTys backid={backid} />
<figure>
	<IconDic icon="crown" data="{$score_sum}" />
	<figcaption>
		
			<h2>Could i be a Dictator?</h2>
			{#if $score_sum < $threshold}
			<a href="/tests"><p>Complete our TESTs to challange your authoriter values</p></a>
			{:else}
			<a href="/dics"><p>You've proven your authoriter values to RATE a DiC.</p></a>
			{/if}
		
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