import { container } from 'tsyringe'
import { ModelService } from '@/services/ModelService'
import {LocalStorageService} from "@/services/LocalStorageService";
import {ServiceNames} from "@/core/di/serviceNames";
import {FirebaseService} from "@/services/FirebaseService";
import {ConfigService} from "@/services/ConfigService";
import {RouterService} from "@/services/RouterService";
import {AppInitService} from "@/services/AppInitService";
import {OrderFormService} from "@/services/forms/OrderFormService";
import {OrderRepository} from "@/repositories/orderRepository";
import {OrderService} from "@/services/orderService";
import {FirestoreRepository} from "@/repositories/firestoreRepository";
import {ModelRepository} from "@/repositories/modelRepository";

export const registerServices = () => {
    container.registerSingleton(ServiceNames.ConfigService,ConfigService)
    container.registerSingleton(ServiceNames.FirebaseService, FirebaseService)
    container.registerSingleton(ServiceNames.LocalStorageService,LocalStorageService )
    container.registerSingleton(ServiceNames.RouterService, RouterService)
    container.registerSingleton(ServiceNames.AppInitService, AppInitService)

    container.registerSingleton(ServiceNames.ModelRepository, ModelRepository)
    container.registerSingleton(ServiceNames.ModelService, ModelService)

    container.registerSingleton(ServiceNames.FirestoreRepository, FirestoreRepository)

    container.registerSingleton(ServiceNames.OrderRepository, OrderRepository)
    container.registerSingleton(ServiceNames.OrderService, OrderService)
    container.registerSingleton(ServiceNames.OrderFormService, OrderFormService)
}



export { container }