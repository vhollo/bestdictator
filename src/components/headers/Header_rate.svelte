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
	margin: 0 var(--gutter-);
	padding: 0 var(--gutter);
}

figure {
	display: flex ;
	flex-wrap: wrap;
	align-items: flex-end;
	padding: var(--gutter) 0;
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
}
figcaption b {
	display: block;
	font-size: larger;
}

nav {
	display: flex;
	text-align: center;
	overflow-x: auto;
	padding: var(--gutter);
	line-height: 1.5;
}
nav a {
	padding: var(--gutter);
}
nav a :global(svg) {
	margin-bottom: var(--gutter);
}

</style>
