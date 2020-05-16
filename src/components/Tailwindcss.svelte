<style global>
@tailwind base;

body {
	background-color: var(--bgcolor);
	color: var(--txtcolor);
}
h1 {
@apply text-3xl;
color: var(--maincolor);
}
h2 {
@apply text-2xl;
color: var(--extcolor);
}
h3 {
@apply text-xl;
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

html {
	--pie-width: 12px;
	--pie-pos: -12px;
	--green: theme('colors.green');
}

.darktheme {
	--bgcolor: theme('colors.dark');
	--txtcolor: theme('colors.light');
	--maincolor: theme('colors.dark_main');
	--extcolor: theme('colors.light_main');
}
.lighttheme {
	--bgcolor: theme('colors.light');
	--txtcolor: theme('colors.dark');
	--maincolor: theme('colors.light_main');
	--extcolor: theme('colors.dark_main');
}
.darktheme .darkinv, .lighttheme .lightinv {
	filter: invert(100%);
}

</style>