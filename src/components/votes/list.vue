<template>
    <div class="page-content">
        <div class="row" style="height: 50px;">
<div class="col-sm-8">
    <ul class="nav nav-pills">
        <li v-bind:class="{'active': pageType=='proccess'}">
            <router-link :to="{ name: 'voteslist', params:{ time:'proccess', type:'all' } }">正在进行</router-link>
        </li>
        <li v-bind:class="{'active': pageType=='nobegin'}">
            <router-link :to="{ name: 'voteslist', params:{ time:'nobegin', type:'all' } }">未开始</router-link>
        </li>
        <li v-bind:class="{'active': pageType=='end'}">
            <router-link :to="{ name: 'voteslist', params:{ time:'end', type:'all' } }">已结束</router-link>
        </li>
    </ul>
</div>
<div class="col-sm-4">
    <div class="row">
        <label for="form-field-1" class="col-sm-4 control-label no-padding-right">排序方式</label>
        <div class="col-sm-8">
            <select v-model="sort" class="form-control">
                <option value="system">系统默认</option> 
                <option value="votesDesc">票数（高到低）</option> 
                <option value="votesAsc">票数（低到高）</option> 
                <option value="beginDateDesc">开始时间（最近到最早）</option>
                <option value="beginDateAsc">开始时间（最早到最近）</option>
                <option value="endDateDesc">结束时间（最近到最早）</option>
                <option value="endDateAsc">结束时间（最早到最近）</option>
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
                    <th>标题</th>
                    <th>类型</th>
                    <th>申请人编号</th>
                    <th>申请人姓名</th>
                    <th>详细描述</th>
                    <th>
                        <i class="icon-time bigger-110 hidden-480"></i> 开始时间
                    </th>
                    <th>
                        <i class="icon-time bigger-110 hidden-480"></i> 结束时间
                    </th>
                    <th>票数</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in list">
                    <td>{{index+1}}</td>
                    <td>{{item.ID}}</td>
                    <td>{{item.Title}}</td>
                    <td>{{item.Type}}</td>
                    <td>{{item.NO}}</td>
                    <td>{{item.Name}}</td>
                    <td>{{item.Detail}}</td>
                    <td>{{formatDate(item.BeginDate)}}</td>
                    <td>{{formatDate(item.EndDate)}}</td>
                    <td>{{item.Votes}}</td>
                    <td>
                        <router-link :to="{name:'votesedit', params:{id:item.ID}}" class="btn btn-xs btn-info">
                            <i class="icon-edit bigger-120"></i>
                        </router-link>
                        <button v-on:click="remove(item.ID)" class="btn btn-xs btn-danger">
																	<i class="icon-trash bigger-120"></i>
																</button>
                        <button v-on:click="vote(item.ID)" v-if="pageType == 'proccess'" class="btn btn-xs btn-warning">
																	投他一票
																</button>
                        <span v-if="pageType == 'nobegin'">未开始</span>
                        <span v-if="pageType == 'end'">已结束</span>
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

    //快速排序sort: 1降序， 0升序
    const quickSort = (arr, sort, key) => {
        //如果数组<=1,则直接返回
        if (arr.length <= 1) 
            return arr;

            let pivotIndex = Math.floor(arr.length / 2);

            //找基准，并把基准从原数组删除
            let pivot = arr.splice(pivotIndex, 1)[0];

            //定义左右数组
            let left = [];
            let right = [];

            //比基准小的放在left，比基准大的放在right
            for (let i = 0; i < arr.length; i++) {
                if (sort == 0)
                    arr[i][key] <= pivot[key] ? left.push(arr[i]) : right.push(arr[i]);
                else
                    arr[i][key] > pivot[key] ? left.push(arr[i]) : right.push(arr[i]);

            }

            return quickSort(left, sort, key).concat([pivot], quickSort(right, sort, key));
    }


    const _bindList = (self) => {
        fetch(self.$store.state.apiBase + '/votes/list?time=' + self.$route.params.time + "&type=" + self.$route.params.type)
            .then(response => response.json())
            .then(data => self.list = data.list)
    }

    export default {
        name: 'vVoteslist',

        data() {
            return {
                list: [],
                sort: 'system',
                pageType: 'proccess'
            }
        },

        created: function () {
            _bindList(this);
        },

        watch: {
            '$route'(to, from) {
                _bindList(this);
                this.pageType = this.$route.params.time;
            },

            'sort'(value) {
                switch (value) {
                    case 'votesDesc':
                        this.list = quickSort(this.list, 1, 'Votes');
                        break;

                    case 'votesAsc':
                        this.list = quickSort(this.list, 0, 'Votes');
                        break;

                    case 'beginDateDesc':
                        this.list = quickSort(this.list, 1, 'BeginDate');
                        break;

                    case 'beginDateAsc':
                        this.list = quickSort(this.list, 0, 'BeginDate');
                        break;

                    case 'endDateDesc':
                        this.list = quickSort(this.list, 1, 'EndDate');
                        break;

                    case 'endDateAsc':
                        this.list = quickSort(this.list, 0, 'EndDate');
                        break;

                    default:
                        this.list = quickSort(this.list, 1, 'PubDate');
                        break;
                }

            }

        },

        methods: {
            vote(id) {
                let self = this;

                fetch(self.$store.state.apiBase + '/votes/vote?voteid=' + id + "&userId=" + localStorage.getItem("userId"))
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            _bindList(self);
                            alert("投票成功！");
                        } else
                            alert(result.reason);
                    })
            },

            remove(id) {
                let self = this;
                if (confirm("确认删除吗?")) {
                    fetch(self.$store.state.apiBase + '/votes/delete?id=' + id)
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