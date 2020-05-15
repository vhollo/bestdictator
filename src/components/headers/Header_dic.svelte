<script>
	import LogoDic from '../svg/dic-logo.svelte';
	import IconDic from '../svg/dic-icon.svelte';
	export let post
	export let rank_overall = 21
</script>

<header>
	<aside>
		<LogoDic />
		<big><b>{rank_overall}</b></big>
	</aside>
	<figure>
		<img src="{post.photo}" alt="{post.title}">
		<figcaption><big>{post.title}</big><small>{post.desc}</small></figcaption>
	</figure>
	<aside>
		<big>Dictator LEVEL</big>
		<div class="pie"></div>
	</aside>
</header>

<style>
	header {
		background-color: var(--maincolor);
		color: var(--txtcolor);
		display: flex;
		align-items: center;
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

.pie{
  width: 100px; height: 100px;
  border-radius: 50%;
  background: conic-gradient(#655 40%, yellowgreen 0);
}

/* 	header :global(svg) {
		margin: 0 auto;
		fill: white;
	}
 */

</style>