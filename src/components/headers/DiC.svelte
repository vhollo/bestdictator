<script>
	import IconDic from '../svg/dic-icon.svelte';
	export let post
</script>

<header>
	<figure>
		<img src="{post.photo}" alt="{post.title}">
		<figcaption><big>{post.title}</big>{post.desc}</figcaption>
	</figure>
</header>

<style>
	header {
		background-color: var(--maincolor);
		color: var(--txtcolor);
	}

	figure {
		@apply flex flex-wrap items-center;
		justify-content: space-evenly;
	}

	figure img {
		max-width: 20%;
	}

	figcaption {
		font-size: 2rem;
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

	nav a :global(svg) {
		margin: 0 auto;
		fill: white;
	}
	
</style>