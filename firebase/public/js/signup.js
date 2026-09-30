console.log(firebase);


  const firebaseConfig = {
    apiKey: "AIzaSyBIfksc_2zf1KNOr8QdalUEsR0X8LoAg_c",
    authDomain: "chatappsept26.firebaseapp.com",
    projectId: "chatappsept26",
    storageBucket: "chatappsept26.firebasestorage.app",
    messagingSenderId: "262112877925",
    appId: "1:262112877925:web:6f6638e5a338e48006558c"
  };


  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();



  function signUserUp(params) {
    signupBtn.innerHTML = 'loading..'
     signupBtn.disabled = true
    let email = document.getElementById('email').value.trim()
   let password = document.getElementById('password').value.trim()
    let fullname = document.getElementById('fullName').value.trim()


    if (!email || !password || !fullname) {
         alert('all fields are mandatory')
         return
    }  

 auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user);

user.updateProfile({
  displayName: fullname,
}).then(() => {
    alert('sign up successful')
    window.location.href = 'login.html'
     signupBtn.innerHTML = 'Sign Up'
     signupBtn.disabled = false
 
}).catch((error) => {
    alert('sign up successful , coudnt update username at the moment')
    window.location.href = 'login.html'
     signupBtn.innerHTML = 'Sign Up'
     signupBtn.disabled = false
});  




  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
     signupBtn.innerHTML = 'Sign Up'
     signupBtn.disabled = false

  });
    
  }


  function signInWithGoogle(params) {
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    window.location.href = 'dashboard.html'
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    alert(errorMessage)
  });
}



  // explaination
//   let firebase = {
//     auth: ()=> {
//       return {
//         createUserWithEmailAndPassword: ( email , password )=> {

//         }
//       }
//     } , 
//   }


//  firebase.auth().createUserWithEmailAndPassword(email , password)