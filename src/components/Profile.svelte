<script>
export let data
//export let group = 'family'
export let names
export let average
export let score
export let threshold
</script>

<aside>
{#each Object.entries(data) as [key, value]}
<label>
	{names[key]}
	<div style="--level:{(value-1)*25}%">
		{#if score < threshold}
		<input name="{key}" type="range" min="1" max="5" bind:value={data[key]} on:change={(data[key] = value)}>
		{:else}
		<input type="range" min="1" max="5" disabled>
		{/if}
		<mark style="--mark:{(average[key] - 1) * 25}%"></mark>
	</div>
</label>
{/each}
</aside>
<!-- <label>
	Evil smile
	<div style="--level:50%">
		<input tabindex=0 ddisabled={score < threshold} type=range min="1" max="5" id="smile">
		<mark style="--mark:50%"></mark>
	</div>
</label>
 -->

<style>
aside {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	grid-gap: 0 var(--gutterx);
}
label {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	white-space: nowrap;
	margin: 0 auto;
	width: 18rem;
}
div{ 
	position: relative;
	display: flex;
	margin-left: var(--gutter);
	background: var(--toolbg);
}
div::before {
	content: '';
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	width: var(--level);
	background: var(--maincolor);
}

input{ 
	position: relative;
	visibility: hidden;
	height: 1rem;
	width: 8.5rem;
}
/* input:not(:disabled):hover, input:not(:disabled):focus {
	visibility: visible;
} */
label:hover input:not(:disabled), input:not(:disabled):focus {
	visibility: visible;
}

mark {
	position: absolute;
	left: var(--mark);
	top: -15%;
	bottom: -15%;
	width: 2px;
}
/* label:last-of-type {
	display: none;
} */
</style>
