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
										<option value="优秀党员">优秀党员</option>
										<option value="优秀工作者">优秀工作者</option>
                                        <option value="处分">处分</option>
							</select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">描述</label>
                        <div class="col-sm-5">
                            <textarea name="Detail" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="clearfix form-actions">
                        <div class="col-md-offset-3 col-md-9">
                            <button v-on:click="submitForm" class="btn btn-info" type="button"><i class="icon-ok bigger-110"></i>提交</button>
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
            submitForm() {
                let self = this;
                let data = new FormData(document.getElementById('userForm'));

                fetch(this.$store.state.apiBase + "/awards/add", {
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