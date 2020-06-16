
<style global>
@tailwind base;

:root {
  font-size: clamp(75%, 78% + .5vw, 115%);
	line-height: 1.75;
	--orange: #ff3d00;
	--green: #c0ff55;
	--light: #e2e8f0;
	--light25: #e2e8f03f;
	--dark: #111;
	--darkgray: #0f2537;
	--midtone: #1f4667;

	--pie-width: 12px;
	--pie-pos: -12px;
	--toolsize: 5rem;
	--headsize: 2rem;
	--midsize: 1.5rem;
	--smallsize: .75rem;
	
	--gutter: 1rem;
	--gutter-: -1rem;
	--gutter2: 2rem;
	--gutter2-: -2rem;
	--gutterx: calc(var(--gutter) / 2);
	--gutterx-: calc(var(--gutter) / -2);
	--guttery: calc(var(--gutter) / 4);
	--gutterz: calc(var(--gutter) / 8);
	--spacer: calc(4 * var(--gutter));
}

body {
	position: relative;
	background-color: var(--darkgray);
	/* min-height: 100vh;
	min-height: -webkit-fill-available; */
}
html {
  height: -webkit-fill-available;
}

/* dark theme */
#dm:not(:checked) ~ #sapper {
	--bgcolor: var(--darkgray);
	--txtcolor: var(--light);
	--txt25: var(--light25);
	--maincolor: var(--orange);
	--extcolor: var(--green);
	--toolbg: var(--midtone);
	--tooltxt: var(--txtcolor);
	--infobg: var(--dark);
	--infotxt: var(--txtcolor);
	--navbg: #0f2537f0;
}

/* light theme */
#dm:checked ~ #sapper {
	--bgcolor: var(--light);
	--txtcolor: var(--dark);
	--maincolor: var(--orange);
	--extcolor: var(--darkgray);
	--toolbg: var(--green);
	--tooltxt: var(--bgcolor);
	--infobg: var(--midtone);
	--infotxt: var(--bgcolor);
	--navbg: #e2e8f0f0;
}

#dm:checked ~ #sapper svg#white { display: none; }
#dm:not(:checked) ~ #sapper svg#black { display: none; }


#sapper {
	max-width: 64em;
	margin: 0 auto;
	color: var(--txtcolor);
	/* background-color: var(--bgcolor); */
	position: relative;
}
main > header {
	background-color: var(--maincolor);
	color: var(--txtcolor);
	margin: 0 var(--gutter-);
	/* padding: 0 var(--gutter); */
	border-top: 2px solid var(--extcolor);
}
@media screen and (min-width: 40rem) {
	main > header {
		margin: 0 var(--gutter2-);
	}
}

svg {
	fill: var(--txtcolor);
	margin: 0 auto;
}
svg text {
	fill: var(--bgcolor);
	margin: 0 auto;
}

.h1 {
	@apply text-5xl;
	@apply mt-8 mb-4;
	line-height: 1;
	/* margin-bottom: 0; */
}
h1 {
	@apply h1;
}
.h2 {
	@apply text-2xl;
	@apply mt-8 mb-4;
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

/* p {
	margin-bottom: var(--gutter2);
} */

@tailwind components;
/* 
@tailwind utilities;
 */

#dm:checked ~ #sapper .lightinv, #dm:not(:checked) ~ #sapper .darkinv {
	filter: invert(100%);
}
mark {
	background-color: var(--extcolor);
}

button {
	outline: 2px solid var(--maincolor);
	padding: 0 var(--gutterx);
	margin: 0 var(--gutterx);
	cursor: default;
}


</style>