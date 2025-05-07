export type AppConfig = {
    firebase: FirebaseConfig
    instagramAccount: string
}

export type FirebaseConfig = {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
}