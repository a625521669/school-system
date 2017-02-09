<template>
    <div class="navbar navbar-default" id="navbar">
        <div class="navbar-container" id="navbar-container">
            <div class="navbar-header pull-left">
                <a href="#" class="navbar-brand">
                    <small><i class="icon-leaf"></i>军校党务信息管理系统</small>
                </a>
                <!-- /.brand -->
            </div>
            <!-- /.navbar-header -->

            <div class="navbar-header pull-right" role="navigation">
                <ul class="nav ace-nav">
                    <li class="light-blue" v-bind:class="{open:openUserOptions}">
                        <a v-on:click="toggleUserOptions" data-toggle="dropdown" href="javascript:void(0)" class="dropdown-toggle">
                            <span class="user-info">
									<small>欢迎回来,</small>
									Jason
								</span>

                            <i class="icon-caret-down"></i>
                        </a>

                        <ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">

                            <li>
                                <a v-on:click="toMe" href="javascript:void(0)">
                                    <i class="icon-user"></i> 个人资料
                                </a>
                            </li>
                            <li>
                                <a v-on:click="toPassword" href="javascript: void(0)">
                                    <i class="icon-cog"></i> 密码修改
                                </a>
                            </li>
                            <li class="divider"></li>

                            <li>
                                <a v-on:click="logout" href="javascript:void(0)">
                                    <i class="icon-off"></i> 退出
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- /.ace-nav -->
            </div>
            <!-- /.navbar-header -->
        </div>
        <!-- /.container -->
    </div>
</template>


<script>
    export default {
        name: 'vHeader',
        methods: {
            toggleUserOptions() {
                this.$store.commit('toggleUserOption');
            },
            toMe(){
                this.$store.commit('toggleUserOption');
                this.$router.push({ name: 'me' });
            },
            toPassword(){
                this.$store.commit('toggleUserOption');
                this.$router.push({ name: 'password' });
            },
            logout() {
                localStorage.removeItem("userId");

                this.$store.commit('toggleUserOption');
                this.$router.push({ name: 'login' });
            }
        },
        computed: {
            openUserOptions() {
                return this.$store.state.openUserOptions;
            }
        }
    }
</script>