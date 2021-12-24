<template>
	<top-menu></top-menu>
	<div class="appContainer">
		<side-menu></side-menu>
		<main class="main">
			<router-view />
		</main>
	</div>
	<!-- <div class="videoBg">
		<video autoplay loop muted>
			<source src="./assets/img/bg04.mp4" type="video/mp4" />
		</video>
	</div> -->
</template>

<script>
	import TopMenu from './components/common/TopMenu.vue';
	import SideMenu from './components/common/SideMenu.vue';
	export default {
		components: {
			TopMenu,
			SideMenu,
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
	.main {
		width: calc(100% - 240px);
		/* padding: 4vw 5vw; */
		/* background: rgba(16 18 27 / 25%); */
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
	.appContainer {
		display: flex;
		height: calc(100vh - 76px);
	}
</style>
