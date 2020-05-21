<script>
	import { calcrank } from '../../routes/dics'
	import Pie from '../css/Pie.svelte';
	export let post
	//export let profile = post.profile
	//export let power = post.power
	$: level_overall = ((Object.values(post.profile).reduce((t, n) => t + (n - 1), 0) + Object.values(post.power).reduce((t, n) => t + (n - 1), 0)) / 9.6)
	$: rank = calcrank(post._id, level_overall)
</script>

<a href="{`/dics/${post._id}`}" style="order:{rank}">
	<figure>
		<img src="{post.photo}" alt="{post.title}">
		<figcaption><b>{post.title}</b>{post.desc}</figcaption>
	</figure>
</a>
<aside style="order:{rank}">
	<Pie level="{level_overall}" />
</aside>

<style>
a {
	display: block;
	padding: 1rem 0;
}
aside {
	display: flex;
	align-items: center;
	--maskcolor: var(--bgcolor);
}
aside :global(svg) {
	width: 80px;
}
figure {
	@apply flex items-center;
}

figure img {
	max-width: 20%;
	min-width: 80px;
}

figcaption {
	font-size: large;
	line-height: 1;
	padding: 1rem .5rem;
}
figcaption b {
	font-size: xx-large;
	display: block;
}

</style>
