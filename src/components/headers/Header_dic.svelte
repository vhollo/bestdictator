<script>
	import LogoDic from '../svg/dic-logo.svelte';
	export let post
	export let rank_overall = 21
</script>

<header>
	<aside>
		<LogoDic />
		<big>{rank_overall}</big>
	</aside>
	<figure>
		<img src="{post.photo}" alt="{post.title}">
		<figcaption><big>{post.title}</big><small>{post.desc}</small></figcaption>
	</figure>
	<aside>
		<LogoDic />
	</aside>
</header>

<style>
	header {
		background-color: var(--maincolor);
		color: var(--txtcolor);
		display: flex;
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
		max-width: 25%;
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

/* 	header :global(svg) {
		margin: 0 auto;
		fill: white;
	}
 */

</style>