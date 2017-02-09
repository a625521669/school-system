<template>
	<div id="app">
		<!--主要内容-->
		<v-header></v-header>

		<div class="main-container" id="main-container">
			<div class="main-container-inner">
				<!--侧边栏-->
				<v-sidebar></v-sidebar>

				<div class="main-content">
					<div class="breadcrumbs" id="breadcrumbs">
						<ul class="breadcrumb">
							<li>
								<i class="icon-home home-icon"></i>
								<router-link to="/">
									<a>首页</a>
								</router-link>
							</li>

							<li>
								<a>用户管理</a>
							</li>
						</ul>
						<!-- .breadcrumb -->
					</div>
					<router-view></router-view>
				</div>
				<!-- /.main-content -->
			</div>
			<!-- /.main-container-inner -->
		</div>
		<!-- /.main-container -->
	</div>
</template>



<script>
	import vHeader from "./Header.vue"
	import vSidebar from "./Sidebar.vue"
	import vUserslist from "./components/users/list.vue"

	export default {
		name: 'app',
		components: { vHeader, vSidebar, vUserslist },

	}
</script>