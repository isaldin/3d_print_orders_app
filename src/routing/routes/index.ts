import OrderFormPage from '@/pages/OrderFormPage.vue'
import IndexPage from '@/pages/IndexPage.vue'

import {RouteRecordRaw} from "vue-router";
import OrderCreatedPage from "@/pages/OrderCreatedPage.vue";

export enum RouteNames {
    IndexPage = 'Home',
    MakeOrderPage = 'Make order',
    OrderCreatedPage = 'Order created',
}

export const routes: RouteRecordRaw[] = [
    {
        path: '/m',
        redirect: '/',
        children: [    {
            path: '/m/:modelId',
            name: RouteNames.MakeOrderPage,
            component: OrderFormPage,
        }],
    },
    {
        path: '/',
        name: RouteNames.IndexPage,
        component: IndexPage,
        strict: true,
    },
    {
        path: "/message/",
        redirect: '/',
        children: [{
            path: 'order-created',
            name: RouteNames.OrderCreatedPage,
            component: OrderCreatedPage,
        }]
    }
]