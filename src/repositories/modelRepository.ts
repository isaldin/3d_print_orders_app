import {inject, injectable} from "tsyringe";
import {FirestoreRepository} from "@/repositories/firestoreRepository";
import {Model} from "@/enitities/model";
import {ServiceNames} from "@/core/di/serviceNames";
import {FirebaseService} from "@/services/FirebaseService";

@injectable()
export class ModelRepository extends FirestoreRepository<Model> {
    constructor(
        @inject(ServiceNames.FirebaseService) protected readonly firebaseService: FirebaseService,
    ) {
        super(
            firebaseService,
            'models',
        );
    }
}