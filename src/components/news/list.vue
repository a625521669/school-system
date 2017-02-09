<template>
    <div class="page-content">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
            <div class="col-xs-12">
                <table id="sample-table-1" class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>标题</th>
                            <th>类型</th>
                            <th>详细描述</th>
                            <th>
                                <i class="icon-time bigger-110 hidden-480"></i> 创建时间
                            </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in list">
                            <td>{{index+1}}</td>
                            <td>{{item.Title}}</td>
                            <td>{{item.Type}}</td>
                            <td>{{item.Detail}}</td>
                            <td>{{formatDate(item.PubDate)}}</td>
                            <td>
                                <div class="visible-md visible-lg hidden-sm hidden-xs btn-group">
                                    <router-link :to="{name:'newsedit', params:{id:item.ID}}" class="btn btn-xs btn-info">
                                        <i class="icon-edit bigger-120"></i>
                                    </router-link>

                                    <!--<router-link :to="{name:'passwordadmin2', params:{no:item.UserName}}" class="btn btn-xs btn-info">
                                        <i class="icon-cog bigger-120"></i>
                                    </router-link>-->

                                    <button v-on:click="remove(item.ID)" class="btn btn-xs btn-danger">
																	<i class="icon-trash bigger-120"></i>
																</button>
                                </div>
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

    var _bindList = (self) => {
        fetch(self.$store.state.apiBase + '/news/list?type=' + self.$route.params.type)
            .then(response => response.json())
            .then(data => self.list = data.list)
    }

    export default {
        name: 'vUserslist',
        data() {
            return {
                list: []
            }
        },
        created: function () {
            _bindList(this);
        },
        watch: {
            '$route'(to, from) {
                _bindList(this);
            }
        },
        methods: {
            remove(id) {
                var self = this;
                if (confirm("确认删除吗?")) {
                    fetch(self.$store.state.apiBase + '/news/delete?id=' + id)
                        .then(response => response.json())
                        .then(() => {
                            _bindList(self);
                        })
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