<script>
	import { calcrank } from '../../routes/dics'
	import Pie from '../css/Pie.svelte';
	export let post
	$: level_overall = ((Object.values(post.profile).reduce((t, n) => t + (n - 1), 0) + Object.values(post.power).reduce((t, n) => t + (n - 1), 0)) / 9.6)
	$: rank = calcrank(post._id, level_overall)
</script>

<figure style="order:{rank}">
	<img src="{post.photo}" alt="{post.title}">
	<figcaption><a href="{`/dics/${post._id}`}"><b>{post.title}</b></a>{post.desc}</figcaption>
</figure>
<aside style="order:{rank}">
	<a href="{`/dics/${post._id}`}"><Pie level="{level_overall}" /></a>
</aside>


<style>
a::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
aside {
	display: flex;
	align-items: center;
	--maskcolor: var(--bgcolor);
	position: relative;
}
aside :global(svg) {
	width: var(--toolsize);
}
figure {
	display: flex;
	align-items: center;
	position: relative;
}

figure img {
	max-width: 20%;
	min-width: var(--toolsize);
}

figcaption {
	font-size: larger;
	line-height: 1.1;
	padding-left: var(--gutter);
	height: var(--toolsize);
	overflow-y: auto;
}
figcaption b {
	font-size: var(--headsize);
	display: block;
}

</style>
