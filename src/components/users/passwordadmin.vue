<template>
    <div class="page-content">
        <div class="row">
            <div class="col-xs-12">
                <form id="userForm" class="form-horizontal" role="form">
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">用户名（党员编号）</label>
                        <div class="col-sm-9">
                            <input name="userName" v-bind:value="userName" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">输入新密码</label>
                        <div class="col-sm-9">
                            <input name="newPassword1" type="password" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">再次输入新密码</label>
                        <div class="col-sm-9">
                            <input name="newPassword2" type="password" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="clearfix form-actions">
                        <div class="col-md-offset-3 col-md-9">
                            <button v-on:click="changePassword" class="btn btn-info" type="button"><i class="icon-ok bigger-110"></i>保存</button>
                            <!--<button class="btn" type="reset"><i class="icon-undo bigger-110"></i>重置</button>-->
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>


<script>
    export default {
        name: 'vPassword',
        data() {
            return {
                userName: {}
            }
        },
        created: function () {
              this.userName = this.$route.params.no;
        },
        methods: {
            changePassword() {
                let data = new FormData(document.getElementById('userForm'));
                data.append('userId', localStorage.getItem('userId'));

                fetch(this.$store.state.apiBase + '/user/changepasswordadmin', {
                    method: 'POST',
                    body: data
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            alert("修改成功！");
                        } else {
                            alert(result.reason);
                        }
                    })
            }
        }
    }
</script>