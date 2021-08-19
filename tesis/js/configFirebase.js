var firebaseConfig = {
    apiKey: "AIzaSyAUGhPlkq-b8i1XqgeENJUbgwetg3YUB_4",
    authDomain: "geolocalizador-eff1d.firebaseapp.com",
    databaseURL: "https://geolocalizador-eff1d.firebaseio.com",
    projectId: "geolocalizador-eff1d",
    storageBucket: "geolocalizador-eff1d.appspot.com",
    messagingSenderId: "852732622853",
    appId: "1:852732622853:web:3e1b649c02bcce40c1846c"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  
  function registrar(){
    var email = document.getElementById('email-group').value;
    var contrasena = document.getElementById('contrasena-group').value; 
    firebase.auth() .createUserWithEmailAndPassword(email, contrasena)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
  }
  
    function iniciarsesion(){
      var email = document.getElementById('email').value;
      var contrasena = document.getElementById('contrasena').value; 
      
      firebase.auth().signInWithEmailAndPassword(email, contrasena)
      .then((userCredential) => {
      // Signed in
      
      var user = userCredential.user;
      
     ;
      
      // ...
     })
     .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      
      
     });
     firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        window.location="principal.html"
        // ...
      } else {
        // User is signed out
        // ...
        
      }
    });
     
    }
     
    
    
  