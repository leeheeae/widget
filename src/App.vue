<template>
	<div id="nav"><router-link to="/">Home</router-link> |</div>
	<router-view />
</template>

<style>
	/* reset */
	@import url(./assets/css/reset.css);
	#nav a.router-link-exact-active {
		color: #42b983;
	}
	#app {
		width: 100%;
		min-height: 100vh;
		background: #f6f8f8;
	}
</style>
