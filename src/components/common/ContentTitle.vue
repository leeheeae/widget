<template>
	<h1>{{ title }}</h1>
	<p>{{ subTitle }}</p>
</template>

<script>
	export default {
		props: ['title', 'subTitle'],
	};
</script>

<style scoped>
	h1 {
		font-size: 2.2rem;
		font-weight: 500;
		color: #fff;
	}
	p {
		font-size: 1rem;
		font-weight: 300;
		color: #ccc;
	}
</style>
