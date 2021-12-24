<template>
	<div>
		<content-title
			:title="'Kakao Map API'"
			:subTitle="'kakao API를 이용하여 REST API 방식의 구현 이해하기'"
		></content-title>
		<kakao-map-view></kakao-map-view>
	</div>
</template>

<script>
	import ContentTitle from '../components/common/ContentTitle.vue';
	import KakaoMapView from '../components/kakao/KakaoMapView.vue';
	export default {
		components: {
			ContentTitle,
			KakaoMapView,
		},
		created() {
			console.log();
			//console.log(VUE_APP_KAKAO_KEY);
		},
	};
</script>

<style></style>
