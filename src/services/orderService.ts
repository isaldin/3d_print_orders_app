import {inject, injectable} from "tsyringe";
import {ServiceNames} from "@/core/di/serviceNames";
import {OrderRepository} from "@/repositories/orderRepository";
import {CreateOrderPayload} from "@/services/orderService.types";

@injectable()
export class OrderService {
    constructor(@inject(ServiceNames.OrderRepository) private readonly orderRepository: OrderRepository) {
        console.log('orderService init')
    }

    public async makeOrder(data: CreateOrderPayload) {
        await this.orderRepository.create({
            modelId: data.modelId,
            comment: data.comment,
            contactPhone: data.contactPhone,
            source: 'instagram',
            status: 'new',
            amount: 1
        })
    }
}