<template>
	<div></div>
	<!-- https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord -->
	<button @click="this.onClickItem()">테스트</button>
</template>

<script>
	import axios from 'axios';
	export default {
		methods: {
			onClickItem() {
				axios
					.get('https://dapi.kakao.com/v2/local/search/address.json')
					.then((response) => {
						console.log(response.data);
					})
					.catch((err) => {
						console.error(err);
					});
			},
		},
	};
</script>

<style></style>
