<script>
	import RankDic from '../svg/dic-rank.svelte';
	import Pie from '../css/pie.svelte';
	export let post
	export let rank = '?'
	export let level_overall = 0
</script>

<header>
	<aside>
		<RankDic rank="{rank}" />
	</aside>
	<figure>
		<img src="{post.photo}" alt="{post.title}">
		<figcaption><b>{post.title}</b>{post.desc}</figcaption>
	</figure>
	<aside>
		<label>Dictator LEVEL</label>
		<Pie level="{level_overall}" />
	</aside>
</header>

<style>
header {
	background-color: var(--maincolor);
	color: var(--txtcolor);
	display: flex;
	position: sticky;
	top: 0;
	z-index: 1;
}
aside {
	width: min-content;
	text-align: center;
	padding: 2%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
aside :global(svg) {
	width: 80px;
}
figure {
	@apply flex flex-wrap items-center;
	justify-content: space-evenly;
}

figure img {
	max-width: 30%;
	min-width: 80px;
}

figcaption {
	font-size: x-large;
	line-height: 1;
	text-align: center;
}
figcaption b {
	font-size: xx-large;
	display: block;
}

</style>
