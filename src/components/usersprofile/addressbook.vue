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
                            <th>姓名</th>
                            <th>住址</th>
                            <th>电话</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in list">
                            <td>{{index+1}}</td>
                            <td>
                                {{item.NO}}
                            </td>
                            <td>{{item.Name}}</td>
                            <td>{{item.Address}}</td>
                            <td>{{item.Phone}}</td>
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
    var _bindData = (self) => {
        fetch(self.$store.state.apiBase + '/user/infolist')
            .then(response => response.json())
            .then(data => self.list = data.list)
    }

    export default {
        name: 'vAddressBook',
        data() {
            return {
                list: []
            }
        },
        created: function () {
            _bindData(this);
        },
        methods: {

        }
    }
</script>