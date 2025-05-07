import {injectable} from "tsyringe";
import {FirebaseApp, initializeApp} from "firebase/app";
import {FirebaseConfig} from "@/services/ConfigService.types";
import {Firestore, getFirestore} from "firebase/firestore";

@injectable()
export class FirebaseService {
    private firebaseApp: FirebaseApp | null = null;
    private store: Firestore | null = null;

    public initializeFirebase(config: FirebaseConfig) {
        if (!this.firebaseApp) {
            this.firebaseApp = initializeApp(config)
        }

        if (!this.store) {
            this.store = getFirestore(this.firebaseApp!)
        }
    }

    public getStore() {
        if (!this.store) {
            throw new Error('Firebase not initialized')
        }
        return this.store
    }
}