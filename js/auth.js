//firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0Kme-IA1dIFalMsRQTTzvP8UcKc3lPLU",
    authDomain: "authentication-cab0d.firebaseapp.com",
    projectId: "authentication-cab0d",
    storageBucket: "authentication-cab0d.appspot.com",
    messagingSenderId: "489895771380",
    appId: "1:489895771380:web:a86b6c5517af0340ccf2a1"
};
//firebase initialize

//auth model enable

//signup - using auth model

document.addEventListener('DOMContentLoaded', (event) => {
    const regButton = document.getElementById('regBtn');
    if (regButton) {
        regButton.addEventListener('click', () => {
            alert("Registered !");
        });
    }
});


//signIn - using ath model

document.addEventListener('DOMContentLoaded', (event) => {
    const logInButton = document.getElementById('logIn');
    if (logInButton) {
        logInButton.addEventListener('click', () => {
            alert("Login !")
        });
    }
});
