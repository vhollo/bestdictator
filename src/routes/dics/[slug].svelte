<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`_dics/${params.slug}.md`);

		if (res.status === 200) {
			return { postMd: await res.text() };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import fm from 'front-matter';
	import MarkdownIt from 'markdown-it';

	export let postMd;

	const md = new MarkdownIt({ breaks: true, linkify: true });

	$: frontMatter = fm(postMd);
	$: post = {
		...frontMatter.attributes,
		html: md.render(frontMatter.body)
	};
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}


	figure {
		text-align: center;
	}
	img {
		max-width: 100%;
	}
	figcaption {
	}

	aside {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr) );
    grid-gap: 2rem;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>Birth date: {post.birthdate}</p>
<figure>
	<img src="{post.photo}" alt="{post.title}">
	<figcaption>{post.bio}</figcaption>
</figure>

<aside>
<label>psychosis<input type=range min="1" max="5" disabled value={post.profile.psychosis}></label>
<label>power_hunger<input type=range min="1" max="5" disabled value={post.profile.power_hunger}></label>
<label>agression<input type=range min="1" max="5" disabled value={post.profile.agression}></label>
<label>cynicism<input type=range min="1" max="5" disabled value={post.profile.cynicism}></label>
<label>autocracy<input type=range min="1" max="5" disabled value={post.profile.autocracy}></label>
<label>telling_lies<input type=range min="1" max="5" disabled value={post.profile.telling_lies}></label>
<label>bullshit_factor<input type=range min="1" max="5" disabled value={post.profile.bullshit_factor}></label>
<label>corruption<input type=range min="1" max="5" disabled value={post.profile.corruption}></label>
<label>megalomania<input type=range min="1" max="5" disabled value={post.profile.megalomania}></label>
<label>manipulation<input type=range min="1" max="5" disabled value={post.profile.manipulation}></label>
<label>militancy<input type=range min="1" max="5" disabled value={post.profile.militancy}></label>
<label>narcissism<input type=range min="1" max="5" disabled value={post.profile.narcissism}></label>
</aside>
<div class='content'>
	{@html post.html}
</div>
