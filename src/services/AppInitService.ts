import {inject, injectable} from "tsyringe";
import {ServiceNames} from "@/core/di/serviceNames";
import {ConfigService} from "@/services/ConfigService";
import {FirebaseService} from "@/services/FirebaseService";

@injectable()
export class AppInitService {
    private initialized: boolean = false;

    constructor(
        @inject(ServiceNames.ConfigService) private readonly configService: ConfigService,
        @inject(ServiceNames.FirebaseService) private readonly firebaseService: FirebaseService,
    ) {
        // Initialization logic can be added here if needed
    }

    public async init(): Promise<void> {
        if (this.initialized) {
            return;
        }
        this.initialized = true;

        console.log('AppInitService: Initializing application...');

        this.firebaseService.initializeFirebase(this.configService.getConfig().firebase);
    }
}