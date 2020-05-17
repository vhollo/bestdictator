<script>
export let data
export let names
</script>


{#each Object.entries(data) as [key, value]}
<label>{names[key]} <input type=range min="1" max="5" bind:value={data[key]} on:change={data[key] = value} style="--level:{(value-1)*25}%"></label>
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
	margin-left: 1em;
	visibility: hidden;
}
input:hover {
	visibility: visible;
}
input:after {
	visibility: visible;
	content: '';
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	width: var(--level);
	background: white;
}
input:hover:after {
	display: none;
}

</style>