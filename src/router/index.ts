import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';
import General from '@/views/General.vue';
import EditRecord from '@/views/EditRecord.vue';
import Chart from '@/views/Chart.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/general'
    },
    {
        path: '/money',
        component: Money
    },
    {
        path:'/general',
        component: General
    },
    {
        path: '/chart',
        component: Chart
    },
    {
        path: '/general/edit/:id',
        component: EditRecord
    },
    {
        path: '*',
        component: NotFound
    },
];


const router = new VueRouter({
    routes
});

export default router;
