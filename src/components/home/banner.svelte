<script>
	import confetti from 'canvas-confetti';
	import { post } from '../../utils/request';

	let h1 = '卡卡的课后空间';

	export let count, hero;

	function fire() {
		confetti({
			particleCount: 100,
			spread: 50,
			origin: { y: 0.6 },
		});

		count++;
		// 修改 count
		post('/test', { count });
	}
</script>

<div class="hero min-h-screen" style={`background-image: url(${hero});`}>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{h1}</h1>
			<p class="mb-5">
				非常感谢您的关注！我们正在紧锣密鼓地准备中，我们将为您带来丰富多彩的内容和精彩的活动。
			</p>
			<button class="btn btn-primary" on:click={() => fire()}>敬请期待 x {count}</button>
		</div>
	</div>
</div>
