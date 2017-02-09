<template>
    <div class="page-content">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
            <div class="col-xs-12">
                <table id="sample-table-1" class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>账号</th>
                            <th>权限</th>
                            <th>
                                <i class="icon-time bigger-110 hidden-480"></i> 创建时间
                            </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in list">
                            <td>{{index+1}}</td>
                            <td>
                                <a href="javascript:void(0)">{{item.UserName}}</a>
                            </td>
                            <td class="hidden-480">
                                <span v-if="item.Pemission==1" class="label label-sm label-inverse arrowed-in">管理员</span>
                                <span v-if="item.Pemission==2" class="label label-sm label-warning">支部书记</span>
                                <span v-if="item.Pemission==3" class="label label-sm label-success">普通用户</span>
                            </td>
                            <td class="hidden-480">{{item.CreateOn}}</td>

                            <td>
                                <div class="visible-md visible-lg hidden-sm hidden-xs btn-group">
                                    <router-link :to="{name:'usersprofileedit', params:{no:item.UserName}}" class="btn btn-xs btn-info">
                                        <i class="icon-edit bigger-120"></i>
                                    </router-link>

                                    <router-link :to="{name:'passwordadmin2', params:{no:item.UserName}}" class="btn btn-xs btn-info">
                                        <i class="icon-cog bigger-120"></i>
                                    </router-link>

                                    <button v-on:click="remove(item.UserName)" class="btn btn-xs btn-danger">
																	<i class="icon-trash bigger-120"></i>
																</button>

                                    <button v-on:click="setPemission(item.UserName, 1)" v-if="item.Pemission!=1" class="btn btn-xs btn-warning">
																	设置为管理员
																</button>
                                    <button v-on:click="setPemission(item.UserName, 2)" v-if="item.Pemission!=2" class="btn btn-xs btn-warning">
																	设置为支部书记
																</button>
                                    <button v-on:click="setPemission(item.UserName, 3)" v-if="item.Pemission!=3" class="btn btn-xs btn-warning">
																	设置为普通用户
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
    export default {
        name: 'vUserslist',
        data() {
            return {
                list: []
            }
        },
        created: function () {
            var self = this;
            fetch(self.$store.state.apiBase + '/user/list')
                .then(response => response.json())
                .then(data => self.list = data.list)
        },
        methods: {
            remove(userName) {
                var self = this;
                if (confirm("确认删除" + userName + "吗?")) {
                    fetch(self.$store.state.apiBase + '/user/delete?userName=' + userName)
                        .then(response => response.json())
                        .then(() => {
                            fetch(self.$store.state.apiBase + '/user/list')
                                .then(response => response.json())
                                .then(data => self.list = data.list)
                        })
                }
                else {
                    return;
                }
            },
            setPemission(userName, pemission) {
                var self = this;
                fetch(self.$store.state.apiBase + '/user/SetPemission?userName=' + userName + "&pemission=" + pemission)
                    .then(response => response.json())
                    .then(() => {
                        fetch(self.$store.state.apiBase + '/user/list')
                            .then(response => response.json())
                            .then(data => self.list = data.list)
                    })
            }
        }
    }
</script>