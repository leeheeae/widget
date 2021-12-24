<template>
	<div id="kakaoMap"></div>
</template>

<script>
	// import { Kakao, useKakao } from 'vue3-kakao-sdk';

	// const { kakao, initialize } = useKakao();
	export default {
		data() {
			return {
				map: null,
			};
		},
		methods: {
			// async initMap() {
			// 	await initialize();
			// 	kakao.value.Auth.login({
			// 		success(success) {
			// 			console.log(success); //  yass!
			// 		},
			// 		fail(err) {
			// 			console.error(err);
			// 		},
			// 	});
			// },
			initkakaoMap() {
				if (!window.kakao || !window.kakao.maps) {
					const mapScript = document.createElement('script');
					mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_KEY}`;
					mapScript.addEventListener('load', () => {
						kakao.maps.load(() => {
							this.initMap();
						});
					});
					document.head.appendChild(mapScript);
				} else {
					this.initMap();
				}
			},
			initMap() {
				const container = document.getElementById('kakaoMap');
				const options = {
					center: new kakao.maps.LatLng(33.450701, 126.570667),
					level: 3,
				};

				new kakao.maps.Map(container, options);
			},
		},
		mounted() {
			this.initkakaoMap();
		},
	};
</script>

<style scoped>
	#kakaoMap {
		width: 100%;
		height: 500px;
		margin-top: 20px;
		border-radius: 4px;
		border: 4px solid #eee;
	}
</style>
