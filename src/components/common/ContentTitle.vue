<template>
	<div class="title-container">
		<div class="left-title">
			<h1>{{ title }}</h1>
			<p>{{ subTitle }}</p>
		</div>
		<div class="btn-list">
			<div class="link">
				<svg
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					fill="#000000"
				>
					<path
						d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
					/>
				</svg>
				<a
					href="https://apis.map.kakao.com/web/sample/"
					target="_blank"
					rel="noreferrer noopener"
					>Kakao Map Site</a
				>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'subTitle'],
	};
</script>

<style scoped>
	.title-container {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	h1 {
		font-size: 2.4rem;
		font-weight: 500;
		color: #fff;
		letter-spacing: -0.6px;
	}
	p {
		font-size: 0.95rem;
		font-weight: 300;
		color: #ccc;
	}
	.link {
		display: flex;
		align-items: center;
		padding: 10px 12px;
		border-radius: 2px;
		background: rgba(255, 255, 255, 0.9);
		color: #3f4146;
		font-size: 0.9rem;
		font-weight: 500;
		transition: 0.3s;
	}
	.link svg {
		margin-right: 5px;
		fill: #77828a;
	}
	.link:hover {
		background: rgba(255, 255, 255, 1);
	}
</style>
