import app from "./App.vue"
import login from "./components/login/login.vue"

import usersList from "./components/users/list.vue"
import password from "./components/users/password.vue"
import passwordadmin from "./components/users/passwordadmin.vue"

import usersprofilelist from "./components/usersprofile/list.vue"
import usersprofileadd from "./components/usersprofile/add.vue"
import usersprofileedit from "./components/usersprofile/edit.vue"
import addressbook from "./components/usersprofile/addressbook.vue"
import me from "./components/usersprofile/me.vue"

import awardslist from "./components/awards/list.vue"
import awardsadd from "./components/awards/add.vue"
import awardsedit from "./components/awards/edit.vue"

import newslist from "./components/news/list.vue"
import newsadd from "./components/news/add.vue"
import newsedit from "./components/news/edit.vue"

import voteslist from "./components/votes/list.vue"
import votesadd from "./components/votes/add.vue"
import votesedit from "./components/votes/edit.vue"

import fileslist from "./components/files/list.vue"
import filesadd from "./components/files/add.vue"

import departmentlist from "./components/department/list.vue"
import departmentadd from "./components/department/add.vue"
import departmentedit from "./components/department/edit.vue"

import depgrouplist from "./components/depgroup/list.vue"
import depgroupadd from "./components/depgroup/add.vue"
import depgroupedit from "./components/depgroup/edit.vue"

const routes = [
    {
        path: '/',
        name: 'index',
        component: app,
        children: [
            {
                path: '/users/list',
                name: 'userslist',
                component: usersList
            },
            {
                path: '/users/password',
                name: 'password',
                component: password
            },
            {
                path: '/users/passwordadmin',
                name: 'passwordadmin',
                component: passwordadmin
            },
            {
                path: '/users/passwordadmin/:no',
                name: 'passwordadmin2',
                component: passwordadmin
            },
            {
                path: '/profile/list/:type',
                name: 'usersprofilelist',
                component: usersprofilelist
            },
            {
                path: '/profile/add',
                name: 'usersprofileadd',
                component: usersprofileadd
            },
            {
                path: '/profile/edit/:no',
                name: 'usersprofileedit',
                component: usersprofileedit
            },
            {
                path: '/profile/edit',
                name: 'usersprofileedit2',
                component: usersprofileedit
            },
            {
                path: '/profile/addressbook',
                name: 'addressbook',
                component: addressbook
            },
            {
                path: '/profile/me',
                name: 'me',
                component: me
            },
            {
                path: '/awards/list/:type',
                name: 'awardslist',
                component: awardslist
            },
            {
                path: '/awards/add',
                name: 'awardsadd',
                component: awardsadd
            },
            {
                path: '/awards/edit/:id',
                name: 'awardsedit',
                component: awardsedit
            },
            {
                path: '/news/list/:type',
                name: 'newslist',
                component: newslist
            },
            {
                path: '/news/add',
                name: 'newsadd',
                component: newsadd
            },
            {
                path: '/news/edit/:id',
                name: 'newsedit',
                component: newsedit
            },
            {
                path: '/votes/list/:time/:type',
                name: 'voteslist',
                component: voteslist
            },
            {
                path: '/votes/add',
                name: 'votesadd',
                component: votesadd
            },
            {
                path: '/votes/edit/:id',
                name: 'votesedit',
                component: votesedit
            },
            {
                path: '/files/add',
                name: 'filesadd',
                component: filesadd
            },
            {
                path: '/files/list',
                name: 'fileslist',
                component: fileslist
            },
            {
                path: '/department/list',
                name: 'departmentlist',
                component: departmentlist
            },
            {
                path: '/department/add',
                name: 'departmentadd',
                component: departmentadd
            },
            {
                path: '/department/edit/:id',
                name: 'departmentedit',
                component: departmentedit
            },
            {
                path: '/depgroup/list',
                name: 'depgrouplist',
                component: depgrouplist
            },
            {
                path: '/depgroup/add',
                name: 'depgroupadd',
                component: depgroupadd
            },
            {
                path: '/depgroup/edit/:id',
                name: 'depgroupedit',
                component: depgroupedit
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]

export default routes
