// firebase authentication methods
// - createUserWithEmailAndPassword(email, pass);
// - signInWithEmailAndPassword(email, pass);
// - signOut()
// - onAuthStateChange(function(user){});

// Your web app's Firebase configuration
var firebaseConfig = {
    // your keys here
 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// service reference
var auth = firebase.auth()


var emailText = $('#exampleInputEmail1');
var passText = $('#exampleInputPassword1');
var formSubmit = $('#submitBtn');

formSubmit.on('click', function(){
    event.preventDefault();
    var email = emailText.val();
    var password = passText.val();
    console.log('LOL');
    auth.createUserWithEmailAndPassword(email, password);
});