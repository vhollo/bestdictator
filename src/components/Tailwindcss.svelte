<style global>
@tailwind base;

body {
	background-color: var(--bgcolor);
	color: var(--txtcolor);
}
h1, .h1 {
@apply text-3xl;
color: var(--maincolor);
text-shadow: var(--textshadow);
@apply mt-8 mb-4;
}
h2, .h2 {
@apply text-2xl;
text-transform: uppercase;
@apply mt-8 mb-4;
}
h3, .h3 {
@apply text-xl;
@apply mt-6 mb-3;
}
h4, .h4 {
@apply text-lg;
@apply mt-6 mb-3;
}

svg {
	fill: var(--txtcolor);
	margin: 0 auto;
}
figcaption {
	margin-right: auto;
	margin-left: auto;
	padding: 1rem 0;
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
	--toolbg: theme('colors.darkgray');
	--textshadow: none;
}
.lighttheme {
	--bgcolor: theme('colors.light');
	--txtcolor: theme('colors.dark');
	--maincolor: theme('colors.light_main');
	--extcolor: theme('colors.dark_main');
	--toolbg: theme('colors.lightgray');
	--textshadow: 1px 1px black;
}
.darktheme .darkinv, .lighttheme .lightinv {
	filter: invert(100%);
}
mark {
	background-color: var(--extcolor);
}


</style>