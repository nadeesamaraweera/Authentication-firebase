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

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


//signUp - using ath model



document.addEventListener('DOMContentLoaded', (event) => {
    const regButton = document.getElementById('regBtn');
    if (regButton) {
        regButton.addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Registered successfully
                    alert("Registered Successfully!");
                    const user = userCredential.user;
                    // You can add more actions here
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage}`);
                });
        });
    }
});


//signIn - using ath model




document.addEventListener('DOMContentLoaded', (event) => {
    const logInButton = document.getElementById('logIn');
    if (logInButton) {
        logInButton.addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Login successful
                    alert("Login Successful!");
                    const user = userCredential.user;
                    // You can add more actions here
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage}`);
                });
        });
    }
});