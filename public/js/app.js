var firebaseConfig = {
    apiKey: "AIzaSyBXmhjfyCni5kq8hngf32LcLglDv8usNZc",
    authDomain: "simplewallpaperapp-b7c53.firebaseapp.com",
    projectId: "simplewallpaperapp-b7c53",
    storageBucket: "simplewallpaperapp-b7c53.appspot.com",
    messagingSenderId: "565045336096",
    appId: "1:565045336096:web:abfd7168037a8eab314445",
    measurementId: "G-Y29ZHF1BL7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function(){

    var email = $("#email").val();
    var password = $("$password").val();

    var authResult = firebase.auth().signInWithEmailAndPassword(email,password);

    authResult.catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
    })

});