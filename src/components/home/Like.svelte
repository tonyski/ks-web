<script>
	import confetti from 'canvas-confetti';
	import { post } from '../../utils/request';
	import { fade } from 'svelte/transition';

	export let count;
	let toastShow = false;

	function fire() {
		confetti({
			particleCount: 100,
			spread: 50,
		});

		count++;
		// 修改 count
		post('/test', { count });

		toastShow = true;
	}
</script>

<button class="btn btn-neutral" on:click={() => fire()}>点赞 x {count}</button>

{#if toastShow}
	<div class="toast" transition:fade={{ delay: 250, duration: 300 }}>
		<div class="alert alert-success">
			<span class="text-white text-sm">😆 谢谢您的点赞!</span>
		</div>
	</div>
{/if}
