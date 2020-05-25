<script>
	import { calcrank } from '../../routes/dics'
	import RankDic from '../svg/dic-rank.svelte';
	import Pie from '../css/Pie.svelte';
	export let post
	//export let profile = post.profile
	//export let power = post.power
	$: level_overall = ((Object.values(post.profile).reduce((t, n) => t + (n - 1), 0) + Object.values(post.power).reduce((t, n) => t + (n - 1), 0)) / 9.6)
	$: rank = calcrank(post._id, level_overall)
</script>

<header style="order:{rank}">
	<aside>
		<RankDic rank="{rank}" />
	</aside>
	<figure>
		<img src="{post.photo}" alt="{post.title}">
		<figcaption>
			<p><b>{post.firstname || ''} {post.middlename || ''} {post.lastname || ''}</b></p>
			<p>{post.desc}</p>
		</figcaption>
	</figure>
	<aside>
		<label>Dictator LEVEL</label>
		<Pie level="{level_overall}" />
	</aside>
</header>

<style>
header {
	background-color: var(--maincolor);
	border-width: 0 0 .25rem;
	border-color: var(--bgcolor);
	margin: 0 -1rem;
	display: flex;
	position: relative;
	overflow-x: auto;
	z-index: 1;
}
@media screen and (min-height: 480px) {
	header {
		position: sticky;
		top: 0;
	}
}
aside {
	width: min-content;
	text-align: center;
	padding: 2%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	--maskcolor: var(--maincolor);
}
aside :global(svg) {
	width: 80px;
}
figure {
	@apply flex items-center;
	/* justify-content: space-evenly; */
}

figure img {
	max-width: 30%;
	min-width: 120px;
}

figcaption {
	font-size: large;
	line-height: 1.25;
	/* text-align: center;
	margin-right: auto;
	margin-left: auto; */
	padding: 1rem .5rem;
}
figcaption b {
	display: block;
	font-size: xx-large;
	line-height: 1;
	margin-bottom: .5rem;
}

</style>
