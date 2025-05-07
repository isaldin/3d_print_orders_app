import {inject, injectable} from "tsyringe";
import {createRouter, createWebHistory, RouteParamsGeneric, Router} from "vue-router";
import {RouteNames, routes} from "@/routing/routes";
import {ServiceNames} from "@/core/di/serviceNames";
import {ConfigService} from "@/services/ConfigService";

@injectable()
export class RouterService {
    private _router: Router | null = null

    constructor(
        @inject(ServiceNames.ConfigService) private readonly configService: ConfigService
    ) {
        //
    }

    public get router(): Router {
        if (!this._router) {
            this._router = this.createRouter()
        }

        return this._router
    }

    public getRouterParams(): Record<string, any> {
        return this._router!.currentRoute.value.params || {}
    }

    public goTo(routeName: RouteNames) {
        this._router?.push({name: routeName})
    }

    public goToInstagramAccount() {
        window.open(this.configService.getConfig().instagramAccount, '_blank')
    }

    private createRouter(): Router {
        return createRouter({
            history: createWebHistory(),
            routes,
        })
    }
}