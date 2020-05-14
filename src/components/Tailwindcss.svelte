<style global>
@tailwind base;

body {
	background-color: var(--bgcolor);
	color: var(--txtcolor);
}
/* html.darktheme {
	--maincolor: theme('colors.darkmain');
}
html.lighttheme {
	--maincolor: theme('colors.lightmain');
}
 */
h1 {
@apply text-2xl;
}
h2 {
@apply text-xl;
}
h3 {
@apply text-lg;
}
/* a {
	@apply text-blue-600 underline;
} */

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
.darktheme .darkinv {
	filter: invert(100%);
}
.lighttheme .lightinv {
	filter: invert(100%);
}




</style>