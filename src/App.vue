<template>
	<Header></Header>
	<router-view />
	<div class="videoBg">
		<video autoplay loop muted>
			<source src="./assets/img/bg04.mp4" type="video/mp4" />
		</video>
	</div>
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
		background-image: url(./assets/img/bg01.jpg);
		background-size: cover;
		background-position: center;
	}
	#app {
		width: 100%;
		min-height: 100vh;
		background: rgba(16 18 27 / 40%);
	}
	.videoBg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		width: 10000%;
		height: 100vh;
		background-size: cover;
		z-index: -1;
		pointer-events: none;
	}
</style>
