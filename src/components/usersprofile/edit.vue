<template>
    <div class="page-content">
        <div class="row">
            <div class="col-xs-12">
                <form id="userForm" class="form-horizontal" role="form">
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">党员编号</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.NO" type="text" id="form-field-1" class="col-xs-10 col-sm-5" disabled>
                            <input v-bind:value="profile.NO" name="NO" type="text" id="form-field-1" class="col-xs-10 col-sm-5" hidden>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">类型</label>
                        <div class="col-sm-3">
                            <select v-model="profile.Type" name="Type" class="form-control">
										<option value="1">党员</option>
										<option value="0">预备党员</option>
							</select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">姓名</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.Name" name="Name" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">性别</label>
                        <div class="col-sm-3">
                            <select v-model="profile.Sex" name="Sex" class="form-control">
										<option value="男">男</option>
										<option value="女">女</option>
							</select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">国籍</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.Nation" name="Nation" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">出生日期</label>
                        <div class="col-sm-9">
                            <input v-bind:value="formatDate(profile.BorthDate)" name="BorthDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">政治面貌</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.Display" name="Display" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">籍贯</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.Origin" name="Origin" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">教育程度</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.Education" name="Education" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">婚否</label>
                        <div class="col-sm-3">
                            <select v-model="profile.Marry" name="Marry" class="form-control">
								<option value="true">否</option>
								<option value="false">是</option>
							</select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">所属支部</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.OwnPart" name="OwnPart" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">所属小组</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.OwnGroup" name="OwnGroup" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">职务</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.Job" name="Job" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">警官证</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.PoliceNO" name="PoliceNO" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">军官证</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.SoldierNO" name="SoldierNO" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">学员证</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.StudentNo" name="StudentNo" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">申请时间</label>
                        <div class="col-sm-9">
                            <input v-bind:value="formatDate(profile.ApplyDate)" name="ApplyDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">入党时间</label>
                        <div class="col-sm-9">
                            <input v-bind:value="formatDate(profile.JoinPartDate)" name="JoinPartDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">加入支部时间</label>
                        <div class="col-sm-9">
                            <input v-bind:value="formatDate(profile.JoinGroupDate)" name="JoinGroupDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">转正时间</label>
                        <div class="col-sm-9">
                            <input v-bind:value="formatDate(profile.BeRegularDate)" name="BeRegularDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">住址</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.Address" name="Address" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">电话</label>
                        <div class="col-sm-9">
                            <input v-bind:value="profile.Phone" name="Phone" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="clearfix form-actions">
                        <div class="col-md-offset-3 col-md-9">
                            <button v-on:click="addUser" class="btn btn-info" type="button"><i class="icon-ok bigger-110"></i>保存</button>
                            <!--<button class="btn" type="reset"><i class="icon-undo bigger-110"></i>重置</button>-->
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import * as common from '../../common.js'

    export default {
        name: 'userprofileedit',
        data() {
            return {
                profile: {}
            }
        },
        created: function () {
            let self = this;
            let no = self.$route.params.no;

            var url = self.$store.state.apiBase + "/user/info";

            if (no != undefined && no != "")
                url += "?no=" + no;
            else
                url += "?userId=" + localStorage.getItem("userId");
                
            fetch(url)
                .then(response => response.json())
                .then(result => self.profile = result)
                .catch(e => console.log("/user/info?no=" + no + ", 接口异常: " + e))
        },
        methods: {
            addUser() {
                let self = this;
                let data = new FormData(document.getElementById('userForm'));

                fetch(self.$store.state.apiBase + "/user/modify", {
                    method: 'POST',
                    body: data
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            alert("修改成功！");
                            self.$router.push({ name: 'userprofilelist' });
                        } else {
                            alert(result.reason);
                        }
                    })

            },

            formatDate(date) {
                return date == null ? date : common.formatDate(date, 'yyyy-MM-dd');
            }
        }
    }
</script>