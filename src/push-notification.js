import firebase from "firebase";

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyBX0U3o_Gj9FiXEvMnrb3Zbgub3wbDVSbY",
        authDomain: "test-78ac9.firebaseapp.com",
        projectId: "test-78ac9",
        storageBucket: "test-78ac9.appspot.com",
        messagingSenderId: "822807034298",
        appId: "1:822807034298:web:5b8830257b11eb40a80583",
        measurementId: "G-TL8BDH5Z9C"
    });
}

export const askForPermissionToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('Your token is:', token);

        return token;
    } catch (error) {
        console.error(error);
    }
}
