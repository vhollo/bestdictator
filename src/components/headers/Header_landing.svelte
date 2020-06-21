<script>
	import IconDic from '../svg/dic-icon.svelte';
	import LogoDic from '../svg/dic-logo.svelte';
</script>

<header>
	<figure>
		<LogoDic />
		<figcaption>Rate your <b>Dictator</b></figcaption>
	</figure>
	<nav>
		<span><IconDic icon="liar" />Who's the biggest liar?</span>
		<span><IconDic icon="cash" />Who's the most corrupt?</span>
		<span><IconDic icon="bomb" />Who's the cruelest?</span>
		<span><IconDic icon="idiot" />Who's the largest idiot?</span>
		<span><IconDic icon="vote" />Why people vote a DiC?</span>
	</nav>
</header>


<style>
figure {
	display: flex ;
	flex-wrap: wrap;
	align-items: flex-end;
	padding: var(--gutter);
}
figure :global(svg) {
	max-width: 30%;
	min-width: 120px;
	align-items: flex-end;
	margin: 0 var(--gutter) 0 0;
}
figcaption {
	font-size: var(--spacer);
	line-height: 0.8;
	padding-top: var(--gutter);
}
figcaption b {
	display: block;
	font-size: larger;
}

nav {
	display: flex;
	text-align: center;
	overflow-x: auto;
	/* padding: var(--gutter); */
	line-height: 1.5;
	/* margin: 0 var(--gutter-); */
}
nav span {
	padding: var(--gutter);
}
nav span :global(svg) {
	margin-bottom: var(--gutter);
	width: var(--toolsize);
	height: auto;
}
/* @media screen and (min-width: 40rem) {
}
 */
</style>
