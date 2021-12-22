<template>
	<div class="item">
		<div
			class="itemContent"
			:style="{
				width: this.itemInfo.width + 'px',
				height: this.itemInfo.heigth + 'px',
			}"
		>
			{{ this.itemInfo.name }}
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			itemInfo: Object,
		},
	};
</script>

<style scoped>
	.item {
		/* position: absolute; */
		background: #666;
		color: #fff;
		margin: 10px;
		padding: 20px;
		user-select: none;
		transition: 0.3s;
		overflow: hidden;
		cursor: default;
	}
	.item.select {
		opacity: 0.2;
		cursor: move;
	}
</style>
