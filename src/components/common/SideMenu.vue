<template>
	<div class="side-menu">
		<div v-for="direct in dir" :key="direct" class="side-wrap">
			<div class="side-title">{{ direct }}</div>

			<template v-for="menu in sideMenuInfo" :key="menu">
				<template v-if="menu.directory === direct">
					<router-link :to="{ path: menu.path }">
						<div class="side-menu-item">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								v-html="menu.icon"
							></svg>
							{{ menu.name }}
						</div>
					</router-link>
				</template>
			</template>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sidemenu',
		data() {
			return {
				dir: [],
				sideMenuInfo: [
					{
						directory: 'Home',
						path: '/',
						name: 'API Widget',
						icon: `<path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/>`,
					},
					{
						directory: 'Home',
						path: '/setting',
						name: 'Setting',
						icon: `<path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>`,
					},
					{
						directory: 'Project',
						path: '/project',
						name: 'Project',
						icon: `<path xmlns="http://www.w3.org/2000/svg" d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>`,
					},
					{
						directory: 'Project',
						path: '/kakao',
						name: 'Kakao API',
						icon: `<path xmlns="http://www.w3.org/2000/svg" d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>`,
					},
				],
			};
		},
		created() {
			for (let item of this.sideMenuInfo) {
			}
		},
		mounted() {
			this.dirArr(this.sideMenuInfo);
		},
		methods: {
			dirArr(arr) {
				const dir = arr.map((item) => item.directory);
				this.dir = [...new Set(dir)];
				return this.dir;
			},
		},
	};
</script>

<style scoped>
	.side-menu {
		width: 240px;
		height: 100%;
		padding: 24px 26px;
		border-right: 1px solid rgba(143, 143, 143, 0.4);
	}
	.side-title {
		color: #414f72;
		font-size: 15px;
		font-weight: 600;
		margin-bottom: 6px;
	}
	.side-wrap {
		margin-bottom: 40px;
	}
	.side-wrap:last-child {
		margin-bottom: 0;
	}
	.side-menu-item {
		text-decoration: none;
		padding: 10px;
		margin-bottom: 4px;
		font-size: 15px;
		font-weight: 400;
		border-radius: 6px;
		color: #f9fafb;
		transition: 0.3s;
		cursor: pointer;
	}
	.side-menu-item svg {
		margin-right: 2px;
		width: 21px;
		fill: #bfc9d1;
	}
	.side-menu-item:hover {
		background: rgba(0, 0, 0, 0.3);
	}
	.side-wrap .router-link-active .side-menu-item {
		background: rgba(0, 0, 0, 0.3);
	}
	.side-wrap .router-link-active .side-menu-item svg {
		fill: #fff;
	}
</style>
