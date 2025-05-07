import {container} from "@/core/di/container";
import {ServiceNames} from "@/core/di/serviceNames";
import {LocalStorageService} from "@/services/LocalStorageService";
import {FirebaseService} from "@/services/FirebaseService";
import {ConfigService} from "@/services/ConfigService";
import {ModelService} from "@/services/ModelService";
import {RouterService} from "@/services/RouterService";
import {OrderFormService} from "@/services/forms/OrderFormService";

const getContainer = () => container;

export const getLocalStorageService = (): LocalStorageService => getContainer().resolve(ServiceNames.LocalStorageService);

export const getModelService = (): ModelService => getContainer().resolve(ServiceNames.ModelService);

export const getRouterService = (): RouterService => getContainer().resolve(ServiceNames.RouterService);

export const getOrderFormService = (): OrderFormService => getContainer().resolve(ServiceNames.OrderFormService);