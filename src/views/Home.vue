<template>
	<div class="home">
		<widget-list></widget-list>
	</div>
</template>

<script>
	// @ is an alias to /src
	import WidgetList from '../components/WidgetList.vue';

	export default {
		name: 'Home',
		components: {
			WidgetList,
		},
	};
</script>
