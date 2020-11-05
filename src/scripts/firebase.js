var firebaseConfig = {
    apiKey: "AIzaSyBYPP5MXsV4dDz-t6hB5dh83APRkDt8UKQ",
    authDomain: "aps-portfolio-site.firebaseapp.com",
    databaseURL: "https://aps-portfolio-site.firebaseio.com",
    projectId: "aps-portfolio-site",
    storageBucket: "aps-portfolio-site.appspot.com",
    messagingSenderId: "213356525465",
    appId: "1:213356525465:web:b69d40a8386c9aa4f80508",
    measurementId: "G-QGX6J2SS12"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e) {
    e.preventDefault();

    // Get Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    
    // Save Message
    saveMessage(name, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block'

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none'
    }, 3000);
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}

