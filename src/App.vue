<template>
	<Header></Header>
	<router-view />
</template>

<script>
	import Header from './components/common/Header.vue';
	export default {
		components: {
			Header,
		},
	};
</script>

<style>
	/* reset */
	@import url(./assets/css/reset.css);
	#nav a.router-link-exact-active {
		color: #42b983;
	}
	body {
		background-image: url(./assets/img/bg04.jpg);
		background-size: cover;
		background-position: center;
	}
	#app {
		width: 100%;
		min-height: 100vh;
		background: rgba(16 18 27 / 40%);
	}
</style>
