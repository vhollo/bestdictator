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
		<input disabled={score < threshold} type=range min="1" max="5" bind:value={data[key]} on:change={score >= threshold && (data[key] = value)} tabindex="0">
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
	margin-right: 10%;
}
div{ 
	position: relative;
	display: flex;
	margin-left: var(--gutter);
}

input{ 
	position: relative;
	visibility: hidden;
	height: 1rem;
}
input:not(:disabled):hover, input:not(:disabled):focus {
	visibility: visible;
}
div {
	/* visibility: visible; */
	/* content: '';
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	width: 100%; */
	background: var(--toolbg);
}
div::before {
	/* visibility: visible; */
	content: '';
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	width: var(--level);
	background: var(--maincolor);
}
/* input:not(:disabled):hover::before, input:not(:disabled):hover::after, input:not(:disabled):focus::before, input:not(:disabled):focus::after {
	visibility: hidden;
} */

mark {
	position: absolute;
	left: var(--mark);
	top: -15%;
	bottom: -15%;
	width: 2px;
	z-index: 1;
}

</style>
