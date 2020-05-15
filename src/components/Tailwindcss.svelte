<style global>
@tailwind base;

body {
	background-color: var(--bgcolor);
	color: var(--txtcolor);
}
h1 {
@apply text-3xl;
color: salmon;
}
h2 {
@apply text-2xl;
color: lightgreen;
}
h3 {
@apply text-xl;
color: lightskyblue;
}
h4 {
@apply text-lg;
}

svg {
	fill: var(--txtcolor);
	margin: 0 auto;
}
figcaption {
	margin-right: auto;
	margin-left: auto;
}

@tailwind components;
@tailwind utilities;


.darktheme {
	--bgcolor: theme('colors.dark');
	--txtcolor: theme('colors.light');
	--maincolor: theme('colors.dark_main');
}
.lighttheme {
	--bgcolor: theme('colors.light');
	--txtcolor: theme('colors.dark');
	--maincolor: theme('colors.light_main');
}
.darktheme .darkinv, .lighttheme .lightinv {
	filter: invert(100%);
}


</style>