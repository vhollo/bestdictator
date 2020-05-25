<style global>
@tailwind base;

:root {
  font-size: clamp(75%, 70% + 0.666vw, 115%);
	line-height: 1.75
}
body {
	background-color: var(--bgcolor);
	color: var(--txtcolor);
}
svg {
	fill: var(--txtcolor);
	margin: 0 auto;
}

.h1 {
	@apply text-3xl;
	@apply mt-8 mb-4;
	color: var(--maincolor);
}
h1 {
	@apply h1;
}
.h2 {
	@apply text-2xl;
	@apply mt-8 mb-4;
	text-transform: uppercase;
}
h2 {
	@apply h2;
}
.h3 {
	@apply text-xl;
	@apply mt-6 mb-3;
}
h3 {
	@apply h3;
}
.h4 {
	@apply text-lg;
	@apply mt-6 mb-3;
}
h4 {
	@apply h4;
}


@tailwind components;

@tailwind utilities;

html {
	--pie-width: 12px;
	--pie-pos: -12px;
}

.darktheme {
	--bgcolor: theme('colors.dark');
	--txtcolor: theme('colors.light');
	--maincolor: theme('colors.orange');
	--extcolor: theme('colors.green');
	--toolbg: theme('colors.lightgray');
	--infobg: theme('colors.darkgray');
	--textshadow:  1px 1px theme('colors.orange');
}
.lighttheme {
	--bgcolor: theme('colors.light');
	--txtcolor: theme('colors.dark');
	--maincolor: theme('colors.green');
	--extcolor: theme('colors.orange');
	--infobg: theme('colors.lightgray');
	--toolbg: theme('colors.darkgray');
	--textshadow: 1px 1px theme('colors.green');
}
.darktheme .darkinv, .lighttheme .lightinv {
	filter: invert(100%);
}
mark {
	background-color: var(--extcolor);
}

/* 
.h1 {
@apply text-3xl;
color: var(--maincolor);
text-shadow: var(--textshadow);
@apply mt-8 mb-4;
}
.h2 {
@apply text-2xl;
text-transform: uppercase;
@apply mt-8 mb-4;
}
.h3 {
@apply text-xl;
@apply mt-6 mb-3;
}
.h4 {
@apply text-lg;
@apply mt-6 mb-3;
}
 */

</style>