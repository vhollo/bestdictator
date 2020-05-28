<script>
	import { score, threshold, bckid } from '../routes/stores.js';
	export let backid = $bckid
	function _click() {
		$bckid = backid
	}
</script>

<nav>
{#if $score < $threshold}
	<a href="/tests" on:click={_click}><button>TEST</button> yourself to rate your favorite DiCs</a>
{:else}
	<a href="/dics"><button>RATE</button> your favorite DiCs</a>
{/if}
</nav>

<style>
	nav {
		margin-top: var(--spacer);
	}
	nav a {
		display: block;
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}
</style>