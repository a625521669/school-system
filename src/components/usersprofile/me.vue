<template>
    <div class="page-content">
        <!-- /.page-header -->

        <div class="row">
            <div class="col-xs-12">
                <!-- PAGE CONTENT BEGINS -->



                <div class="hr dotted"></div>

                <div>
                    <div id="user-profile-1" class="user-profile row">
                        <div class="col-xs-12 col-sm-3 center">
                            <div>
                                <span class="profile-picture">
													<img id="avatar" class="editable img-responsive" alt="Alex's Avatar" src="/dist/assets/avatars/profile-pic.jpg">
												</span>

                                <div class="space-4"></div>

                                <div class="width-80 label label-info label-xlg arrowed-in arrowed-in-right">
                                    <div class="inline position-relative">
                                        <span class="user-title-label dropdown-toggle" data-toggle="dropdown">
                                            <i class="icon-circle light-green middle"></i> &nbsp;
                                            <span class="white">{{profile.Name}}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="space-6"></div>

                            <div class="profile-contact-info">
                                <div class="profile-contact-links align-left">
                                    <router-link class="btn btn-link" :to="{name:'usersprofileedit2'}">
                                        <i class="icon-plus-sign bigger-120 green"></i> 修改资料
                                    </router-link>

                                    <router-link class="btn btn-link" :to="{name:'password'}">
                                        <i class="icon-cog bigger-120 pink"></i> 修改密码
                                    </router-link>
                                </div>

                                <div class="space-6"></div>


                            </div>






                        </div>

                        <div class="col-xs-12 col-sm-9">


                            <div class="space-12"></div>

                            <div class="profile-user-info profile-user-info-striped">
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 党员编号 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.NO}}</span>
                                    </div>
                                </div>

                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 政治面貌 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">
                                         <span v-if="profile.Type==1">党员</span>
                                        <span v-if="profile.Type==0">预备党员</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 性别 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.Sex}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 国籍 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.Nation}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 出生日期 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{formatDate(profile.BorthDate)}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 籍贯 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.Origin}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 教育程度 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.Education}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 婚否 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">
                                         <span v-if="profile.Marry==true">是</span>
                                        <span v-if="profile.Marry==false">否</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 所属支部 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.OwnPart}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 所属小组 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.OwnGroup}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 职务 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.Job}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 警官证 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.PoliceNO}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 军官证 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.SoldierNO}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 学员证 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.StudentNo}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 申请时间 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{formatDate(profile.ApplyDate)}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 入党时间 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{formatDate(profile.JoinPartDate)}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 加入支部时间 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{formatDate(profile.JoinGroupDate)}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 转正时间 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{formatDate(profile.BeRegularDate)}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 住址 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.Address}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 电话 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{profile.Phone}}</span>
                                    </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-name"> 创建时间 </div>

                                    <div class="profile-info-value">
                                        <span class="editable" id="username">{{formatDate(profile.CreateOn)}}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <!-- PAGE CONTENT ENDS -->
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
</template>



<script>
    import * as common from '../../common.js'

    export default {
        name: 'me',
        data() {
            return {
                profile: {}
            }
        },
        created: function () {
            let self = this;

            fetch(self.$store.state.apiBase + "/user/info?userId=" + localStorage.getItem("userId"))
                .then(response => response.json())
                .then(result => self.profile = result)
                .catch(e => console.log("/user/info?no=" + no + ", 接口异常: " + e))
        },
        methods: {
            formatDate(date) {
                return date == null ? date : common.formatDate(date, 'yyyy-MM-dd');
            }
        }
    }
</script>