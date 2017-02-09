<template>
    <div class="login-layout">
        <div class="main-container">
            <div class="main-content">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <div class="login-container">
                            <div class="center">
                                <h1>
                                    <i class="icon-leaf green"></i>
                                    <span class="red">军校</span>
                                    <span class="white">党务信息管理系统</span>
                                </h1>
                            </div>

                            <div class="space-6"></div>

                            <div class="position-relative">
                                <div id="login-box" class="login-box visible widget-box no-border">
                                    <div class="widget-body">
                                        <div class="widget-main">
                                            <h4 class="header blue lighter bigger">
                                                <i class="icon-coffee green"></i> 输入你的登陆信息
                                            </h4>

                                            <div class="space-6"></div>

                                            <form id="loginForm">
                                                <fieldset>
                                                    <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input name="userName" type="text" class="form-control" placeholder="用户名" />
															<i class="icon-user"></i>
														</span>
													</label>

                                                    <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input name="password" type="password" class="form-control" placeholder="密码" />
															<i class="icon-lock"></i>
														</span>
													</label>

                                                    <div class="space"></div>
                                                    <div class="clearfix">
                                                        <label class="inline">
															<input type="checkbox" class="ace">
															<span class="lbl"> 记住我</span>
														</label>

                                                        <button v-on:click="login" type="button" class="width-35 pull-right btn btn-sm btn-primary">
															<i class="icon-key"></i>
														登陆
														</button>
                                                    </div>

                                                </fieldset>
                                            </form>

                                        </div>
                                        <!-- /widget-main -->

                                    </div>
                                </div>
                            </div>
                            <!-- /widget-body -->
                        </div>
                        <!-- /login-box -->
                    </div>
                </div>
                <!-- /position-relative -->
            </div>
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
    <!-- /.main-container -->
</template>

<script>
    export default {
        name: 'login',
        methods: {
            login() {
                let self = this;
                let data = new FormData(document.getElementById('loginForm'));

                fetch(this.$store.state.apiBase + "/user/login", {
                    method: 'POST',
                    body: data
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.success == false) {
                            alert(result.reason);
                            return;
                        } else {
                            localStorage['userId'] = result.userId;
                            self.$router.push({ name: 'index' });
                        }
                    })
            }
        }
    }
</script>