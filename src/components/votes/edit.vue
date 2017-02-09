<template>
    <div class="page-content">
        <div class="row">
            <div class="col-xs-12">
                <form id="userForm" class="form-horizontal" role="form">
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">党员编号</label>
                        <div class="col-sm-9">
                            <input v-model="data.NO" name="NO" type="text" id="form-field-1" class="col-xs-10 col-sm-5" disabled>
                        </div>
                    </div>
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
										<option value="换届选举">换届选举</option>
										<option value="评优评先">评优评先</option>
                                        <option value="年终考核">年终考核</option>
							</select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">详情</label>
                        <div class="col-sm-5">
                            <textarea v-model="data.Detail" name="Detail" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">开始时间</label>
                        <div class="col-sm-9">
                            <input v-bind:value="formatDate(data.BeginDate)" name="BeginDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">结束时间</label>
                        <div class="col-sm-9">
                            <input v-bind:value="formatDate(data.EndDate)" name="EndDate" type="date" id="form-field-1" class="col-xs-10 col-sm-5">
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
    import * as common from '../../common.js'

    var _submitData = (self, data) => {
        fetch(self.$store.state.apiBase + "/votes/edit", {
            method: "POST",
            body: data
        })
            .then(response => response.json())
            .then(result => result.success ? alert("修改成功！") : alert(result.reason))
            .catch(e => console.error(e))
    }

    var _bindData = (self) => {
        fetch(self.$store.state.apiBase + "/votes/info?id=" + self.$route.params.id)
            .then(response => response.json())
            .then(result => self.data = result)
            .catch(e => console.error(e))
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
            },
            formatDate(date) {
                return date == null ? date : common.formatDate(date, 'yyyy-MM-dd');
            }
        },
        watch: {
            '$route'(to, from) {
                _bindData(this);
            }
        }
    }
</script>