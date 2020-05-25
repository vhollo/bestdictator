<script>
	import IconDic from '../svg/dic-icon.svelte';
	import LogoDic from '../svg/dic-logo.svelte';
</script>

<header>
	<figure>
		<LogoDic />
		<figcaption>Rate your <big>Dictator</big></figcaption>
	</figure>
	<nav>
		<a href="/liar"><IconDic/>Who's the biggest liar?</a>
		<a href="/corrupt"><IconDic />Who's the most corrupt?</a>
		<a href="/cruel"><IconDic />Who's the cruelest?</a>
		<a href="/idiot"><IconDic />Who's the largest idiot?</a>
		<a href="/why"><IconDic />Why people vote a DiC?</a>
	</nav>
</header>

<style>
	header {
		background-color: var(--maincolor);
		color: var(--txtcolor);
	}

	figure {
		display: flex ;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
	}

	figcaption {
		font-size: var(--toolsize);
		line-height: 1;
		text-align: center;
	}

	figcaption big {
		display: block;
	}

	nav {
		display: flex;
		text-align: center;
		overflow-x: auto;
	}

	nav a {
		padding: 1rem;
	}
</style>
