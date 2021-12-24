<template>
	<div class="subCate">
		<template v-for="match in pathMatched" :key="match">
			<router-link :to="{ path: this.$route.path + '/' + match.path }">
				<div>
					{{ match.name }}
				</div>
			</router-link>
		</template>
	</div>
	<router-view></router-view>
</template>

<script>
	export default {
		data() {
			return {
				pathMatched: this.$route.matched[0].children,
			};
		},
		methods: {},
		created() {
			console.log(this.pathMatched);
		},
	};
</script>

<style scoped>
	.router-link-active {
		color: #fff;
	}
</style>
