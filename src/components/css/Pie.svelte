<script>
export let level = 0
/* const mask = (10 - level) * 10 */
</script>


<div style="--mask:{(10-level) * 10}%;" data-level="{(level * 10).toFixed(0)}"></div>

<style>
div {
	position: relative;
  width: var(--toolsize); height: var(--toolsize);
  border-radius: 50%;
	margin: 0 auto;
	background-color: var(--txt25);
	background-image: repeating-conic-gradient(var(--maskcolor, var(--bgcolor)) 0 6deg, var(--txtcolor) 0 18deg);
}
div::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
  border-radius: 50%;
	background-image: conic-gradient(var(--maskcolor, var(--bgcolor)) var(--mask), transparent 0);
	opacity: .75;
}
div::after {
	content: attr(data-level);
  width: 70%; height: 70%;
	position: absolute;
	top: 15%;
	left: 15%;
  border-radius: 50%;
	background: var(--maskcolor, var(--bgcolor));
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: larger;
}
</style>
