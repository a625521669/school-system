<template>
    <div class="page-content">
        <div class="row">
            <div class="col-xs-12">
                <form id="userForm" class="form-horizontal" role="form">
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">标题</label>
                        <div class="col-sm-9">
                            <input v-model="data.Title" name="Title" type="text" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">类型</label>
                        <div class="col-sm-3">
                            <select v-model="data.Type" name="Type" class="form-control">
										<option value="新闻">新闻</option>
										<option value="通知">通知</option>
                                        <option value="公告">公告</option>
							</select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">详情</label>
                        <div class="col-sm-5">
                            <textarea v-model="data.Detail" name="Detail" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="clearfix form-actions">
                        <div class="col-md-offset-3 col-md-9">
                            <button v-on:click="submitForm" class="btn btn-info" type="button"><i class="icon-ok bigger-110"></i>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    var _submitData = (self, data) => {
        fetch(self.$store.state.apiBase + "/news/edit", {
            method: "POST",
            body: data
        })
            .then(response => response.json())
            .then(result => result.success ? alert("修改成功！") : alert(result.reason))
    }

    var _bindData = (self) => {
        fetch(self.$store.state.apiBase + "/news/info?id=" + self.$route.params.id)
            .then(response => response.json())
            .then(result => self.data = result)
    }

    export default {
        name: 'userprofileedit',
        data() {
            return {
                data: {}
            }
        },
        created: function () {
            _bindData(this);
        },
        methods: {
            submitForm() {
                let data = new FormData(document.getElementById('userForm'));
                data.append('id', this.$route.params.id);

                _submitData(this, data);
            }
        },
        watch: {
            '$route'(to, from) {
                _bindData(this);
            }
        }
    }
</script>