<script>
	import { score_sum, threshold, bckid } from '../routes/stores.js';
	export let backid = $bckid
	function _click() {
		$bckid = backid
	}
</script>

<nav>
{#if $score_sum < $threshold}
	To rate a DiC, <a href="/tests/could-i-be-a-dictator" on:click={_click}><button>TEST</button></a> your aptitude first, or <button>DONATE</button> this project
{:else}
	You may <a href="/dics/{$bckid}"><button>RATE</button></a> your favorite DiC
{/if}
</nav>

<style>
	nav {
		padding: var(--spacer) 0;
		text-align: center;
	}
	button {
		margin: 0 var(--guttery) var(--gutter);
	}
	/* nav a {
		display: block;
		width: max-content;
		margin-left: auto;
		margin-right: auto;
	} */
</style>