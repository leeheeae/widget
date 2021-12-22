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
		position: absolute;
		background: #666;
		color: #fff;
		border-radius: 10px;
		margin: 10px;
		padding: 20px;
		user-select: none;
		cursor: default;
	}
	.item.select {
		cursor: move;
		z-index: unset;
	}
</style>
