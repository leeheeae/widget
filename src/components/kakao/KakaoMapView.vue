<template>
	<div id="kakaoMap"></div>
	<!-- <div class="mapSearchBox">
		<h4>주소 검색</h4>
		<div class="inputBox">
			<input
				type="text"
				v-model="searchaddr"
				placeholder="주소를 입력해주세요"
			/>
			<button @click="mapTextSearch()">
				<svg viewBox="0 0 26 26" class="searchIcon" data-v-bace73c0="">
					<path
						d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
						data-v-bace73c0=""
					></path></svg
				>Search
			</button>
		</div>
	</div> -->
</template>

<script>
	export default {
		data() {
			return {
				map: null,
				searchaddr: '',
			};
		},
		methods: {
			initkakaoMap() {
				if (!window.kakao || !window.kakao.maps) {
					const mapScript = document.createElement('script');
					mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=${process.env.VUE_APP_KAKAO_KEY}`;
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

				//지도생성
				const map = new kakao.maps.Map(container, options);

				//지도컨트롤생성
				const mapTypeControl = new kakao.maps.MapTypeControl();
				map.addControl(
					mapTypeControl,
					kakao.maps.ControlPosition.TOPRIGHT
				);

				// 지도 줌 컨트롤
				const zoomControl = new kakao.maps.ZoomControl();
				map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
			},
			mapTextSearch() {
				// 주소 - 좌표 변환 객체 생성
				var geocoder = kakao.maps.services.Geocoder();
				// 주소로 좌표를 검색합니다
				geocoder.addressSearch(
					'제주특별자치도 제주시 첨단로 242',
					(result, status) => {
						// 정상적으로 검색이 완료됐으면
						if (status === kakao.maps.services.Status.OK) {
							let coords = new kakao.maps.LatLng(
								result[0].y,
								result[0].x
							);

							// 결과값으로 받은 위치를 마커로 표시합니다
							let marker = new kakao.maps.Marker({
								map: map,
								position: coords,
							});

							// 인포윈도우로 장소에 대한 설명을 표시합니다
							let infowindow = new kakao.maps.InfoWindow({
								content: `<div style="width:150px;text-align:center;padding:6px 0;">제주특별자치도 제주시 첨단로 242</div>`,
							});
							infowindow.open(map, marker);

							// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
							map.setCenter(coords);
						}
					}
				);
				this.searchaddr = '';
			},
		},
		mounted() {
			//mounted가 됐을 때 실행
			this.initkakaoMap();
		},
	};
</script>

<style scoped>
	#kakaoMap {
		width: 100%;
		height: 550px;
		margin-top: 15px;
		border-radius: 3px;
	}
	.mapSearchBox {
		margin-top: 30px;
	}
	.mapSearchBox h4 {
		font-size: 13px;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 2px;
	}
	.mapSearchBox .inputBox {
		display: flex;
		align-items: center;
	}
	.mapSearchBox input {
		width: 100%;
		max-width: 500px;
		height: 40px;
		opacity: 0.8;
		border-radius: 2px;
		padding: 10px;
		font-size: 14px;
	}
	.mapSearchBox input:active,
	.mapSearchBox input:focus {
		opacity: 1;
	}
	.mapSearchBox button {
		width: 100px;
		height: 42px;
		color: #fff;
		background: #14162b;
		border-radius: 2px;
		margin-left: 6px;
		font-size: 14px;
		font-weight: 500;
		transition: 0.3s;
		cursor: pointer;
	}
	.mapSearchBox button:hover {
		background: #1d203f;
	}
	.mapSearchBox button svg {
		width: 20px;
		margin-right: 2px;
	}
</style>
