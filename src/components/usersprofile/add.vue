<template>
    <div class="page-content">
        <div class="row">
            <div class="col-xs-12">
                <form id="userForm" class="form-horizontal" role="form">
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">党员编号</label>
                        <div class="col-sm-9">
                            <input name="NO" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">类型</label>
                        <div class="col-sm-3">
                            <select name="Type" class="form-control">
										<option value="1">党员</option>
										<option value="0">预备党员</option>
							</select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">姓名</label>
                        <div class="col-sm-9">
                            <input name="Name" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">性别</label>
                        <div class="col-sm-3">
                            <select name="Sex" class="form-control">
										<option value="男">男</option>
										<option value="女">女</option>
							</select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">国籍</label>
                        <div class="col-sm-9">
                            <input name="Nation" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">出生日期</label>
                        <div class="col-sm-9">
                            <input name="BorthDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">政治面貌</label>
                        <div class="col-sm-9">
                            <input name="Display" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">籍贯</label>
                        <div class="col-sm-9">
                            <input name="Origin" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">教育程度</label>
                        <div class="col-sm-9">
                            <input name="Education" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">婚否</label>
                        <div class="col-sm-3">
                            <select name="Marry" class="form-control">
								<option value="0">否</option>
								<option value="1">是</option>
							</select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">所属支部</label>
                        <div class="col-sm-9">
                            <input name="OwnPart" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">所属小组</label>
                        <div class="col-sm-9">
                            <input name="OwnGroup" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">职务</label>
                        <div class="col-sm-9">
                            <input name="Job" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">警官证</label>
                        <div class="col-sm-9">
                            <input name="PoliceNO" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">军官证</label>
                        <div class="col-sm-9">
                            <input name="SoldierNO" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">学员证</label>
                        <div class="col-sm-9">
                            <input name="StudentNo" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">申请时间</label>
                        <div class="col-sm-9">
                            <input name="ApplyDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">入党时间</label>
                        <div class="col-sm-9">
                            <input name="JoinPartDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">加入支部时间</label>
                        <div class="col-sm-9">
                            <input name="JoinGroupDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">转正时间</label>
                        <div class="col-sm-9">
                            <input name="BeRegularDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">住址</label>
                        <div class="col-sm-9">
                            <input name="Address" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">电话</label>
                        <div class="col-sm-9">
                            <input name="Phone" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="clearfix form-actions">
                        <div class="col-md-offset-3 col-md-9">
                            <button v-on:click="addUser" class="btn btn-info" type="button"><i class="icon-ok bigger-110"></i>提交</button>
                            <button class="btn" type="reset"><i class="icon-undo bigger-110"></i>重置</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'userprofileadd',
        methods: {
            addUser() {
                let self = this;
                let data = new FormData(document.getElementById('userForm'));

                fetch(this.$store.state.apiBase + "/user/AddUser", {
                    method: 'POST',
                    body: data
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            alert("添加成功！");
                        } else {
                            alert(result.reason);
                        }
                    })
            }
        }
    }
</script>