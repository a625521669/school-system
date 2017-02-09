<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar-shortcuts" id="sidebar-shortcuts">
            <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                <button class="btn btn-success">
								<i class="icon-signal"></i>
							</button>

                <button class="btn btn-info">
								<i class="icon-pencil"></i>
							</button>

                <button class="btn btn-warning">
								<i class="icon-group"></i>
							</button>

                <button class="btn btn-danger">
								<i class="icon-cogs"></i>
							</button>
            </div>

            <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                <span class="btn btn-success"></span>

                <span class="btn btn-info"></span>

                <span class="btn btn-warning"></span>

                <span class="btn btn-danger"></span>
            </div>
        </div>

        <!-- #sidebar-shortcuts -->
        <ul class="nav nav-list" style="max-height: 600px; overflow-y: auto;">
            <li>
                 <a class="dropdown-toggle">
                        <i class="icon-file-alt"></i>
                        <span class="menu-text"> 用户账户管理 </span>
                        <b class="arrow icon-angle-down"></b>
                </a>

                <ul class="submenu" style="display: block;">
                    <li>
                        <router-link v-bind:to="{ name: 'userslist' }">
                        <i class="icon-double-angle-right"></i>
                        <a>账户列表</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{ name: 'passwordadmin' }">
                        <i class="icon-double-angle-right"></i>
                        <a>修改密码</a>
                        </router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a class="dropdown-toggle">
                    <i class="icon-file-alt"></i>
                    <span class="menu-text"> 用户信息管理 </span>
                    <b class="arrow icon-angle-down"></b>
                </a>

                <ul class="submenu" style="display: block;">
                    <li>
                        <router-link v-bind:to="{name:'usersprofilelist', params:{type:1}}">
                        <i class="icon-double-angle-right"></i>
                        <a>党员花名册</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{name:'usersprofilelist', params:{type:0}}">
                        <i class="icon-double-angle-right"></i>
                        <a>预备党员花名册</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{name:'addressbook'}">
                        <i class="icon-double-angle-right"></i>
                        <a>通讯录</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{name:'usersprofileadd'}">
                        <i class="icon-double-angle-right"></i>
                        <a>添加新用户</a>
                        </router-link>
                    </li>

                      <!--<li>
                        <router-link v-bind:to="{name:'usersprofileedit2'}">
                        <i class="icon-double-angle-right"></i>
                        <a>编辑用户信息</a>
                        </router-link>
                    </li>-->
                </ul>
            </li>

             <li>
                 <a class="dropdown-toggle">
                        <i class="icon-file-alt"></i>
                        <span class="menu-text"> 奖惩信息管理 </span>
                        <b class="arrow icon-angle-down"></b>
                </a>

                <ul class="submenu" style="display: block;">
                    <li>
                        <router-link v-bind:to="{ name: 'awardslist', params:{type:'优秀党员'} }">
                        <i class="icon-double-angle-right"></i>
                        <a>优秀党员列表</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{ name: 'awardslist', params:{type:'优秀工作者'} }">
                        <i class="icon-double-angle-right"></i>
                        <a>优秀工作者列表</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{ name: 'awardslist', params:{type:'处分'} }">
                        <i class="icon-double-angle-right"></i>
                        <a>党内处分列表</a>
                        </router-link>
                    </li>
                     <li>
                        <router-link v-bind:to="{ name: 'awardsadd' }">
                        <i class="icon-double-angle-right"></i>
                        <a>添加新奖惩</a>
                        </router-link>
                    </li>
                </ul>
            </li>

            <li>
                 <a class="dropdown-toggle">
                        <i class="icon-file-alt"></i>
                        <span class="menu-text"> 公示栏 </span>
                        <b class="arrow icon-angle-down"></b>
                </a>

                <ul class="submenu" style="display: block;">
                    <li>
                        <router-link v-bind:to="{ name: 'newslist', params:{type:'新闻'} }">
                        <i class="icon-double-angle-right"></i>
                        <a>新闻</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{ name: 'newslist', params:{type:'通知'} }">
                        <i class="icon-double-angle-right"></i>
                        <a>通知</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{ name: 'newslist', params:{type:'公告'} }">
                        <i class="icon-double-angle-right"></i>
                        <a>公告</a>
                        </router-link>
                    </li>
                     <li>
                        <router-link v-bind:to="{ name: 'newsadd' }">
                        <i class="icon-double-angle-right"></i>
                        <a>添加新公示</a>
                        </router-link>
                    </li>
                </ul>
            </li>

            <li>
                 <a class="dropdown-toggle">
                        <i class="icon-file-alt"></i>
                        <span class="menu-text"> 投票测评 </span>
                        <b class="arrow icon-angle-down"></b>
                </a>

                <ul class="submenu" style="display: block;">
                    <li>
                        <router-link v-bind:to="{ name: 'voteslist', params: {time: 'proccess', type: 'all' } }">
                        <i class="icon-double-angle-right"></i>
                        <a>申请列表</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{ name: 'votesadd' }">
                        <i class="icon-double-angle-right"></i>
                        <a>添加申请</a>
                        </router-link>
                    </li>
                </ul>
            </li>

             <li>
                 <a class="dropdown-toggle">
                        <i class="icon-file-alt"></i>
                        <span class="menu-text"> 文件 </span>
                        <b class="arrow icon-angle-down"></b>
                </a>

                <ul class="submenu" style="display: block;">
                    <li>
                        <router-link v-bind:to="{ name: 'fileslist' }">
                        <i class="icon-double-angle-right"></i>
                        <a>文件列表</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{ name: 'filesadd' }">
                        <i class="icon-double-angle-right"></i>
                        <a>上传文件</a>
                        </router-link>
                    </li>
                </ul>
            </li>
            
             <li>
                 <a class="dropdown-toggle">
                        <i class="icon-file-alt"></i>
                        <span class="menu-text"> 组织结构 </span>
                        <b class="arrow icon-angle-down"></b>
                </a>

                <ul class="submenu" style="display: block;">
                    <li>
                        <router-link v-bind:to="{ name: 'departmentlist' }">
                        <i class="icon-double-angle-right"></i>
                        <a>支部列表</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{ name: 'departmentadd' }">
                        <i class="icon-double-angle-right"></i>
                        <a>添加支部</a>
                        </router-link>
                    </li>
                     <li>
                        <router-link v-bind:to="{ name: 'depgrouplist' }">
                        <i class="icon-double-angle-right"></i>
                        <a>小组列表</a>
                        </router-link>
                    </li>
                   <li>
                        <router-link v-bind:to="{ name: 'depgroupadd' }">
                        <i class="icon-double-angle-right"></i>
                        <a>添加小组</a>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>

        <!-- /.nav-list -->
        <div class="sidebar-collapse" id="sidebar-collapse">
            <i class="icon-double-angle-left" data-icon1="icon-double-angle-left" data-icon2="icon-double-angle-right"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vSidebar'
    }    
</script>