<template>
    <div class="page-content">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
            <div class="col-xs-12">
                <table id="sample-table-1" class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>党员编号</th>
                            <th>政治面貌</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>国籍</th>
                            <th>
                                出生日期</th>
                            <th>籍贯</th>
                            <th>教育程度</th>
                            <th>婚否</th>
                            <th>所属支部</th>
                            <th>所属小组</th>
                            <th>职务</th>
                            <th>警官证</th>
                            <th>军官证</th>
                            <th>学员证</th>
                            <th>
                                申请时间</th>
                            <th>
                                入党时间</th>
                            <th>
                                加入支部时间</th>
                            <th>
                                转正时间</th>
                            <th>住址</th>
                            <th>电话</th>
                            <th>
                                </i>创建时间
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in list">
                            <td>{{index+1}}</td>
                            <td>
                                <router-link :to="{name:'usersprofileedit', params:{no: item.NO}}">
                                    {{item.NO}}
                                </router-link>
                            </td>
                            <td>
                                <span v-if="item.Type==1">党员</span>
                                <span v-if="item.Type==0">预备党员</span>
                            </td>
                            <td>{{item.Name}}</td>
                            <td>{{item.Sex}}</td>
                            <td>{{item.Nation}}</td>
                            <td>{{formatDate(item.BorthDate)}}</td>
                            <td>{{item.Origin}}</td>
                            <td>{{item.Education}}</td>
                            <td>
                                <span v-if="item.Marry==true">是</span>
                                <span v-if="item.Marry==false">否</span>
                            </td>
                            <td>{{item.OwnPart}}</td>
                            <td>{{item.OwnGroup}}</td>
                            <td>{{item.Job}}</td>
                            <td>{{item.PoliceNO}}</td>
                            <td>{{item.SoldierNO}}</td>
                            <td>{{item.StudentNo}}</td>
                            <td>{{formatDate(item.ApplyDate)}}</td>
                            <td>{{formatDate(item.JoinPartDate)}}</td>
                            <td>{{formatDate(item.JoinGroupDate)}}</td>
                            <td>{{formatDate(item.BeRegularDate)}}</td>
                            <td>{{item.Address}}</td>
                            <td>{{item.Phone}}</td>
                            <td>{{formatDate(item.CreateOn)}}</td>
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

    var _bindData = (self, type) => {
        fetch(self.$store.state.apiBase + '/user/infolist?type=' + type)
            .then(response => response.json())
            .then(data => self.list = data.list)
    }

    export default {
        name: 'vUsersprofilelist',
        data() {
            return {
                list: []
            }
        },
        created: function () {
            _bindData(this, this.$route.params.type);
        },
        watch: {
            '$route'(to, from) {
                _bindData(this, this.$route.params.type);
            }
        },
        methods: {
            formatDate(date) {
                return date == null ? date : common.formatDate(date, 'yyyy-MM-dd');
            }
        }
    }
</script>