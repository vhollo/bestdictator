<script>
	import LogoDic from '../svg/dic-logo.svelte';
	import IconDic from '../svg/dic-icon.svelte';
	import Pie from '../css/pie.svelte';
	export let post
	export let rank = '?'
	export let level_overall = 0
</script>

<header>
	<aside>
		<LogoDic />
		<span>{rank}</span>
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
		align-items: center;
		padding: 0 2%;
	}
	aside {
		width: min-content;
		text-align: center;
		padding: .5rem;
	}
	aside :global(svg) {
		width: 80px;
	}
	aside span {
		font-size: xx-large;
		font-weight: bold;
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
