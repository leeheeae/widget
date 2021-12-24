<template>
	<div class="subCate">
		<h2 class="sub-cate-title">Kakao API</h2>
		<template v-for="match in pathMatched" :key="match">
			<router-link :to="{ path: '/kakao/' + match.path }">
				<div>
					{{ match.name }}
				</div>
			</router-link>
		</template>
	</div>
	<div class="mainContent">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pathMatched: this.$route.matched[0].children,
			};
		},
		methods: {},
	};
</script>

<style scoped>
	.subCate {
		width: 100%;
		height: 62px;
		display: flex;
		align-items: center;
		background: rgba(16 18 27 / 12%);
	}
	.sub-cate-title {
		padding: 0 30px;
		margin-right: 30px;
		font-size: 18px;
		font-weight: 600;
		color: #fff;
		border-right: 1px solid #ccc;
	}
	.subCate div {
		padding: 20px 24px;
		font-size: 15px;
		font-weight: 500;
		color: #fff;
		opacity: 0.5;
	}
	.mainContent {
		padding: 3vw 4vw;
		height: calc(100% - 62px);
		background: rgba(16 18 27 / 25%);
	}
	.router-link-exact-active {
		color: #fff;
		background: #586bdb;
	}
	.router-link-exact-active div {
		opacity: 1;
	}
</style>
