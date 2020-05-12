<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	img {
		border: solid 2px black;
		@apply shadow-md;
	}
	img {
		@apply shadow-md;
	}
aside {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
	grid-gap: 0 2rem;
}

aside > label {
		display: flex;
		justify-content: space-between;
	}

</style>