<template>
    <div class="page-content">
        <div class="row">
            <div class="col-xs-12">
                <form id="userForm" class="form-horizontal" role="form" enctype="multipart/form-data">
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">文件名</label>
                        <div class="col-sm-9">
                            <input name="Name" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">类型</label>
                        <div class="col-sm-3">
                            <select name="Type" class="form-control">
                                        <option value="档案">档案</option>
										<option value="个人简历">个人简历</option>
										<option value="入党申请书">入党申请书</option>
                                        <option value="转正申请书">转正申请书</option>
                                        <option value="积极分子考察表">积极分子考察表</option>
                                        <option value="党表">党表</option>
                                        <option value="思想汇报">思想汇报 </option>
							</select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">署名</label>
                        <div class="col-sm-9">
                            <input name="Signature" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">选择上传文件</label>
                        <div class="col-sm-9">
                            <input name="files" type="file" id="form-field-1" class="col-xs-10 col-sm-5">
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
        name: 'vFilesadd',
        methods: {
            submitForm() {
                let self = this;
                let data = new FormData(document.getElementById('userForm'));

                fetch(this.$store.state.apiBase + "/files/add", {
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