import { createRouter, createWebHistory } from "vue-router";

// import dashboard from '../pages/todoform/tambahdealer'
import dashboard from '../pages/master/dashboard'
// import homepage from '../pages/master/home'
import dftproduk from '../pages/dftproduk'
import listdealer from '../pages/listdealer'
import home from '../pages/home'
import merk from '../pages/merk'
import login from '../pages/login'

import listdealertable from '../pages/dealer/tambahdealerlist'
import editdealer from '../pages/dealer/editdealer'

    const routes = [
        {
            name: 'login',
            path: '/',
            component:login, 
        },
        {
            name: 'dashboard',
            path: '/dashboard',
            component:dashboard,
            children:[
                {
                    name: 'dftproduk',
                    path: '/dftproduk',
                    component:dftproduk
                },
                {
                    name: 'listdealer',
                    path: '/listdealer',
                    component:listdealer,
                },
                {
                    name:'home',
                    path:'/home',
                    component:home
                },
                {
                    name:'merk',
                    path:'/merk',
                    component:merk
                }
            ]
        },
        {
            name: 'listdealertable',
            path: '/listdealertable',
            component:listdealertable, 
        },
        {
            name: 'editDealer',
            path: '/editdealer:id/edit',
            component:editdealer, 
        },
    ];

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}