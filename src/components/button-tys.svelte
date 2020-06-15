<script>
	import { score_sum, threshold, bckid } from '../stores.js';
	export let backid = $bckid
	function _click() {
		$bckid = backid
	}
</script>

<nav>
{#if $score_sum < $threshold}
	To rate a DiC, <a href="/tests" on:click={_click}><button>TEST</button></a> your aptitude first, or <button>DONATE</button> this project
{:else}
	You may <a href="/dics/{$bckid}"><button>RATE</button></a> your favorite DiC, or <button>DONATE</button> this project
{/if}
</nav>

<style>
	nav {
		padding: var(--gutter2) 0;
		text-align: center;
    display: flex;
    align-items: center;
		justify-content: center;
		margin: 0 var(--gutter-);
		background-color: var(--infobg);
		color: var(--infotxt);
	}
	@media screen and (min-width: 40rem) {
		nav {
			margin: 0 var(--gutter2-);
		}
	}
	/* button {
		margin: 0 var(--guttery) var(--gutter);
	} */
	/* nav a {
		display: block;
		width: max-content;
		margin-left: auto;
		margin-right: auto;
	} */
</style>