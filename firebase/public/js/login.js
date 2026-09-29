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


  function logInUser(){
    let email = document.getElementById('email').value.trim()
   let password = document.getElementById('password').value.trim()


    auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    alert('login successful')
    window.location.href = 'dashboard.html'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage.slice(9))
  });

  }