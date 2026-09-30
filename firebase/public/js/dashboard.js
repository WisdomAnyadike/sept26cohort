  const firebaseConfig = {
    apiKey: "AIzaSyBIfksc_2zf1KNOr8QdalUEsR0X8LoAg_c",
    authDomain: "chatappsept26.firebaseapp.com",
    projectId: "chatappsept26",
    storageBucket: "chatappsept26.firebasestorage.app",
    messagingSenderId: "262112877925",
    appId: "1:262112877925:web:6f6638e5a338e48006558c",
     databaseURL: "https://chatappsept26-default-rtdb.firebaseio.com"
  };


  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();
  let chatIndex
 





function authenticateUser() {
    auth.onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
   userName.innerHTML = user.displayName.split(' ')[0] || 'User'
  } else {
 window.location.href = 'login.html'
  }
});
}

authenticateUser()


function logUserOut (){

    let canLogOut = confirm('are you sure?')

    if (canLogOut) {
auth.signOut().then(() => {
  window.location.href = 'login.html'
}).catch((error) => {
  alert(error.message)
});
    }
}



function displayMessages (params) {

database.ref('chats').on('value', (snapshot) => {
  const data = snapshot.val() || []
console.log(data)
chatIndex = data.length

chatMessages.innerHTML = ''
data.forEach(( { sender , time , message } , i , arr )=> {

    let isMine = auth.currentUser.displayName === sender
 
    chatMessages.innerHTML += `<div class="message ${isMine ? 'mine' : ''}">
          <div class="sender"> ${isMine ? 'You' : sender.split(' ')[0] }</div>
          <div class="text"> ${message}</div>
          <span class="time">${time} </span>
        </div>`


})

});

     
    
}


displayMessages()

function sendMessage(params) {
    let mssg = messageInput.value.trim()

    if (!mssg) {
         alert('please attach a message')
         return
    }

  firebase.database().ref(`chats/${chatIndex}`).set({
    sender:  firebase.auth().currentUser.displayName ,
    message: mssg ,
    time : new Date().toLocaleTimeString() , 
    isDeleted : false 
  }).then(() => {
    messageInput.value = ''
//   alert('message sent successfully')
}).catch((error) => {
  alert(error.message)
});

    
}





