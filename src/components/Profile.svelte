<script>
export let data
export let names
export let average
</script>


{#each Object.entries(data) as [key, value]}
<label>
	{names[key]}
	<div>
		<input type=range min="1" max="5" bind:value={data[key]} on:change={data[key] = value} style="--level:{(value-1)*25}%">
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
	margin-right: 2em;
}
input{ 
	position: relative;
	visibility: hidden;
}
input:hover {
	visibility: visible;
}
input:before {
	visibility: visible;
	content: '';
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	width: 100%;
	/* background: dimgrey; */
	background: var(--toolbg);
}
input:after {
	visibility: visible;
	content: '';
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	width: var(--level);
	background: var(--maincolor);
}
input:hover:before, input:hover:after {
	visibility: hidden;
}

div{ 
	position: relative;
	display: flex;
	margin-left: 1em;
}
mark {
	position: absolute;
	left: var(--mark);
	top: -15%;
	bottom: -15%;
	width: 2px;
}

</style>
