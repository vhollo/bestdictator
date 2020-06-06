<script>
export let data
export let names
export let average
export let score
export let threshold
</script>


{#each Object.entries(data) as [key, value]}
<label>
	{names[key]}
	<div style="--level:{(value-1)*25}%">
		<input tabindex=0 ddisabled={score < threshold} type=range min="1" max="5" bind:value={data[key]} on:change={score >= threshold && (data[key] = value)}>
		<mark style="--mark:{(average[key] - 1) * 25}%"></mark>
	</div>
</label>
{/each}


<style>
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
input:not(:disabled):hover, input:not(:disabled):focus {
	visibility: visible;
}

mark {
	position: absolute;
	left: var(--mark);
	top: -15%;
	bottom: -15%;
	width: 2px;
}

</style>
