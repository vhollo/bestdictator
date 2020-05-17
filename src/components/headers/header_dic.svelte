<script>
	import LogoDic from '../svg/dic-logo.svelte';
	import IconDic from '../svg/dic-icon.svelte';
	import Pie from '../css/pie.svelte';
	export let post
	export let rank_overall = 21
	export let level_overall = 0
</script>

<header>
	<aside>
		<LogoDic />
		<big><big><big><b>{rank_overall}</b></big></big></big>
	</aside>
	<figure>
		<img src="{post.photo}" alt="{post.title}">
		<figcaption><big>{post.title}</big><small>{post.desc}</small></figcaption>
	</figure>
	<aside>
		<big>Dictator LEVEL</big>
		<Pie level="{level_overall}" />
	</aside>
</header>

<style>
	header {
		background-color: var(--maincolor);
		color: var(--txtcolor);
		display: flex;
		align-items: center;
		padding: 0 2rem;
	}
	aside {
		text-align: center;
		padding: .5rem;
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
		font-size: 2rem;
		line-height: 1;
		text-align: center;
	}

	figcaption big {
		display: block;
	}
</style>
