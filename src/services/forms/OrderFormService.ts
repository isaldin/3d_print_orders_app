import {inject, injectable} from "tsyringe";
import {ServiceNames} from "@/core/di/serviceNames";
import {OrderService} from "@/services/orderService";

type OrderFormData = {
    comment: string
    phoneNumber: string
    modelId: string
}

@injectable()
export class OrderFormService {
    constructor(
        @inject(ServiceNames.OrderService) private readonly orderService: OrderService,
    ) {
    }

    public makeOrder(data: OrderFormData) {
        return this.orderService.makeOrder({
            modelId: data.modelId,
            contactPhone: data.phoneNumber,
            comment: data.comment,
            status: 'new'
        })
    }

    public isPhoneNumberValid(phoneNumber: string): boolean {
        // Check if the phone number is valid
        const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
        return phoneRegex.test(phoneNumber);
    }
}