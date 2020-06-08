<script>
	import { score_sum, threshold, bckid } from '../routes/stores.js';
	export let backid = $bckid
	function _click() {
		$bckid = backid
	}
</script>

<nav>
{#if $score_sum < $threshold}
	To rate a DiC, 
	<a href="/tests/could-i-be-a-dictator" on:click={_click}><button>TEST</button> your aptitude </a> first, or
	<button>DONATE</button> this project
{:else}
	<a href="/dics/{$bckid}">You may <button>RATE</button> your favorite DiC</a>
{/if}
</nav>

<style>
	nav {
		padding: var(--spacer) 0;
		text-align: center;
	}
	/* nav a {
		display: block;
		width: max-content;
		margin-left: auto;
		margin-right: auto;
	} */
</style>