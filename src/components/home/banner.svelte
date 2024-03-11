<script>
	import confetti from 'canvas-confetti';
	import { post } from '../../utils/request';

	export let count;

	function fire() {
		confetti({
			particleCount: 100,
			spread: 50,
		});

		count++;
		// 修改 count
		post('/test', { count });
	}
</script>

<button class="btn btn-neutral" on:click={() => fire()}>点赞 x {count}</button>
