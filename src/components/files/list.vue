<template>
    <div class="page-content">
        <div class="row" style="height: 50px;">
<div class="col-sm-4">
    <div class="row">
        <label for="form-field-1" class="col-sm-4 control-label no-padding-right">文件类型</label>
        <div class="col-sm-8">
            <select v-model="dataType" class="form-control">
                <option value="">所有</option>
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
</div>
</div>
<!-- PAGE CONTENT BEGINS -->
<div class="row">
    <div class="col-xs-12">
        <table id="sample-table-1" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>文件名</th>
                    <th>文件类型</th>
                    <th>署名</th>
                    <th>发布日期</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in list">
                    <td>{{index+1}}</td>
                    <td>{{item.ID}}</td>
                    <td>{{item.Name}}</td>
                    <td>{{item.Type}}</td>
                    <td>{{item.Signature}}</td>
                    <td>{{formatDate(item.PubDate)}}</td>
                    <td>

                        <button v-on:click="remove(item.ID)" class="btn btn-xs btn-danger">
																	<i class="icon-trash bigger-120"></i>
																</button>
                        <button v-on:click="download(item.Url)" v-if="pageType == 'proccess'" class="btn btn-xs btn-warning">
																	下载
																</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- /span -->
</div>
<!-- /row -->
</div>
</template>



<script>
    import * as common from '../../common.js'

    let _bindList = (self, type) => {
        var url = self.$store.state.apiBase + '/files/list';

        if (type != undefined)
            url += '?type=' + type;

        fetch(url)
            .then(response => response.json())
            .then(data => self.list = data.list)
    }

    export default {
        name: 'vFileslist',

        data() {
            return {
                list: [],
                dataType: '',
                pageType: 'proccess'
            }
        },

        created: function () {
            _bindList(this);
        },

        watch: {
            $route(to, from) {
                _bindList(this);
                this.pageType = this.$route.params.time;
            },

            dataType(value) {
                _bindList(this, value);
            }
        },

        methods: {
            download(url) {
                window.location.href = this.$store.state.apiBase + url;
            },

            remove(id) {
                let self = this;
                if (confirm("确认删除吗?")) {
                    fetch(self.$store.state.apiBase + '/files/delete?id=' + id)
                        .then(response => response.json())
                        .then(() => _bindList(self))
                }
                else {
                    return;
                }
            },

            formatDate(date) {
                return date == null ? date : common.formatDate(date, 'yyyy-MM-dd');
            }
        }
    }
</script>