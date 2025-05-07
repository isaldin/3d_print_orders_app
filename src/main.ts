import 'reflect-metadata'
import { createApp } from 'vue'
import App from './App.vue'
import '../index.css'
import {container, registerServices} from "@/core/di/container";
import {AppInitService} from "@/services/AppInitService";
import VueSplide from '@splidejs/vue-splide'
import {RouterService} from "@/services/RouterService";
import {ServiceNames} from "@/core/di/serviceNames";

registerServices()

const appService = container.resolve<AppInitService>(ServiceNames.AppInitService)

appService.init().then(() => {
    const app = createApp(App)

    app.use(VueSplide)

    const routerService = container.resolve<RouterService>(ServiceNames.RouterService)
    app.use(routerService.router)

    app.mount('#app')
})

// https://three-d-printing-orders-app.web.app/?model=TaGuFZhlsr0z8eEiifio