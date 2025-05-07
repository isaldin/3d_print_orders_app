import {inject, injectable} from "tsyringe";
import {FirestoreRepository} from "@/repositories/firestoreRepository";
import {Order} from "@/enitities/order";
import {ServiceNames} from "@/core/di/serviceNames";
import {FirebaseService} from "@/services/FirebaseService";

@injectable()
export class OrderRepository extends FirestoreRepository<Order> {
    constructor(
        @inject(ServiceNames.FirebaseService) protected readonly firebaseService: FirebaseService,
    ) {
        super(
            firebaseService,
            'orders',
        );
    }
}