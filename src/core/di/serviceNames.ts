import {AppInitService} from "@/services/AppInitService";
import {OrderService} from "@/services/orderService";
import {ModelRepository} from "@/repositories/modelRepository";

export enum ServiceNames {
    LocalStorageService = 'LocalStorageService',
    FirebaseService = 'FirebaseService',
    ConfigService = 'ConfigService',
    RouterService = 'RouterService',
    AppInitService = 'AppInitService',

    // Repositories
    FirestoreRepository = 'FirestoreRepository',
    OrderRepository = 'OrderRepository',
    ModelRepository = 'ModelRepository',

    // services
    OrderService = 'OrderService',
    OrderFormService = 'OrderFormService',
    ModelService = 'ModelService',
}