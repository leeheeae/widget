<template>
	<div class="home">
		<!-- <widget-list></widget-list> -->
		<mouse-widget-list></mouse-widget-list>
	</div>
</template>

<script>
	// @ is an alias to /src
	import WidgetList from '../components/WidgetList.vue';
	import MouseWidgetList from '../components/mouseMoveWidget.vue';

	export default {
		name: 'Home',
		components: {
			WidgetList,
			MouseWidgetList,
		},
	};
</script>
