<template>
	<header class="header">
		<div class="logo">LEEHEEAE</div>
		<div class="headerContent">
			<div class="gnb">
				<ul>
					<router-link
						v-for="item in gnb"
						:key="item"
						:to="{ path: item.path }"
					>
						<li>
							<span>{{ item.name }}</span>
						</li>
					</router-link>
				</ul>
			</div>
			<div class="searchBox">
				<svg viewBox="0 0 26 26" class="searchIcon">
					<path
						d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
					/>
				</svg>
				<input type="text" placeholder="Search" />
			</div>
		</div>
		<div class="iconBox">
			<div class="search">
				<svg viewBox="0 0 24 24" class="searchIcon">
					<path
						d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
					/>
				</svg>
			</div>
			<div class="alarm">
				<svg viewBox="0 0 24 24" class="alarmIcon">
					<path
						d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
					/>
				</svg>
				<p class="num">
					<span>3</span>
				</p>
			</div>
			<div class="loginInfo">
				<div class="loginImg"></div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'topMenu',
		data() {
			return {
				isActvie: false,
				gnb: [
					{
						name: 'Home',
						path: '/',
					},
					{
						name: 'Project',
						path: '/project',
					},
					{
						name: 'Blog',
						path: '/blog',
					},
					{
						name: 'Contact',
						path: '/contact',
					},
				],
			};
		},
	};
</script>

<style scoped>
	.header {
		width: 100%;
		height: 76px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(143, 143, 143, 0.4);
		padding: 22px;
		justify-content: space-between;
	}
	.header .logo {
		font-size: 24px;
		font-weight: 600;
		font-style: italic;
		color: #fff;
	}
	.headerContent {
		margin: 0 auto;
		display: flex;
		align-items: center;
	}
	.headerContent .gnb {
		margin: 0 3vw;
	}
	.headerContent .gnb ul {
		display: flex;
	}
	.headerContent .gnb li {
		height: 70px;
	}
	.headerContent .gnb span {
		line-height: 70px;
		padding: 0 2.5vw;
		font-size: 1rem;
		font-weight: 400;
		color: #fff;
		opacity: 0.5;
		white-space: nowrap;
		transition: 0.3s;
	}

	.headerContent .gnb .router-link-exact-active li {
		border-bottom: 3px solid #a3b0f7;
	}
	.headerContent .gnb li:hover span,
	.headerContent .gnb .router-link-exact-active li span {
		opacity: 1;
	}
	.headerContent .searchBox {
		width: 26vw;
		background: #14162b;
		border-radius: 3px;
		padding: 7px 10px;
	}
	.headerContent .searchBox .searchIcon {
		width: 24px;
		fill: #95969e;
	}
	.headerContent .searchBox input {
		padding: 5px;
		background: transparent;
		caret-color: #fff;
		color: #fff;
	}
	.headerContent .searchBox input::placeholder {
		color: #fff;
	}
	.iconBox {
		display: flex;
	}
	.iconBox .search {
		margin-right: 1.5vw;
	}
	.iconBox .searchIcon {
		width: 32px;
		fill: #fff;
		cursor: pointer;
		display: none;
	}
	.iconBox .alarm {
		position: relative;
		user-select: none;
		cursor: pointer;
	}
	.iconBox .alarm .alarmIcon {
		width: 32px;
		fill: #fff;
	}
	.iconBox .alarm .num {
		position: absolute;
		top: 0px;
		right: -5px;
		width: 18px;
		height: 18px;
		text-align: center;
		line-height: 18px;
		font-size: 13px;
		background: #586bdb;
		color: #fff;
		transform-origin: center;
		border-radius: 50%;
	}

	.headerContent .iconBox .alarm:hover .alarmIcon {
		animation: alarm 0.35s 2;
	}
	@keyframes alarm {
		0% {
			transform: rotate(0deg) scale(1);
		}
		25% {
			transform: rotate(15deg);
		}
		50% {
			transform: rotate(0) scale(0.9);
		}
		75% {
			transform: rotate(-15deg);
		}
		100% {
			transform: rotate(10) scale(1);
		}
	}

	@media (max-width: 1199px) {
		.headerContent .iconBox {
			margin-left: 2vw;
		}
	}
	@media (max-width: 999px) {
		.headerContent .gnb {
			display: none;
		}
		.headerContent .searchBox {
			display: none;
		}
		.iconBox .searchIcon {
			display: block;
		}
	}
</style>
