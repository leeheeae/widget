<template>
	<div
		class="item"
		:style="{
			width: this.itemInfo.width + 'px',
			height: this.itemInfo.heigth + 'px',
		}"
	>
		<div class="itemContent">
			{{ this.itemInfo.name }}
		</div>

		<p
			class="itemCtrl btmCtrl"
			@mousedown="itemResizeDown($event, 'bottom')"
			@mouseup="itemResizeUp"
			@mouseout="itemResizeUp"
		></p>

		<p
			class="itemCtrl rightCtrl"
			@mousedown="itemResizeDown($event, 'right')"
			@mouseup="itemResizeUp"
			@mouseout="itemResizeUp"
		></p>
	</div>
</template>

<script>
	export default {
		props: {
			itemInfo: Object,
		},
		data() {
			return {};
		},
		methods: {
			itemResizeDown({ target }, direction) {
				console.log('시작');
				const item = target.parentNode;
				const data = {
					clicked: true,
					direction: direction,
					resizeItem: item,
				};

				this.$store.dispatch('itemResizeClick', data);

				// item.draggable = false;
			},
			itemResizeUp({ currentTarget }) {
				// currentTarget.parentNode.draggable = true;
				const data = {
					clicked: false,
					direction: '',
					resizeItem: '',
				};

				this.$store.dispatch('itemResizeLeave', data);
			},
		},
	};
</script>

<style scoped>
	.item {
		position: absolute;
		background: #666;
		color: #fff;
		user-select: none;
		cursor: default;
		margin: 10px;
		/* transition: 0.3s; */
		/* resize: both; */
	}
	.itemContent {
		padding: 20px;
	}
	.item.select {
		cursor: move;
		/* animation: item 0.3s forwards; */
	}
	.itemCtrl {
		position: absolute;
		background: rgba(255, 255, 255, 0.3);
		transition: 0.2s;
		opacity: 0;
	}
	.itemCtrl::after {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		content: '';
		display: block;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		border: 2px solid #fff;
		background: rgba(0, 0, 0, 0.5);
	}
	.item:hover .itemCtrl {
		opacity: 1;
	}
	.btmCtrl {
		width: 100%;
		height: 28px;
		bottom: -14px;
		left: 0;
		cursor: n-resize;
	}
	.rightCtrl {
		width: 24px;
		height: 100%;
		right: -12px;
		top: 0;
		cursor: e-resize;
	}

	@keyframes item {
		90% {
			opacity: 0;
		}
		100% {
			width: 0;
			padding: 0;
		}
	}
</style>
