// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtlIn95akw5CSLMV1lzkuJhOa6kCPqAKQ",
    authDomain: "contact-form1-dc541.firebaseapp.com",
    databaseURL: "https://contact-form1-dc541.firebaseio.com",
    projectId: "contact-form1-dc541",
    storageBucket: "",
    messagingSenderId: "286611802793"
  };
  firebase.initializeApp(config);


var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit' , function(e){
    e.preventDefault() ;
    submitForm() ;
});


function submitForm(){
   alert('submit');
   var fname = getInputVal('fname');
   var lname = getInputVal('lname');
   var email = getInputVal('email');
   var subject = getInputVal('subject');
 

   saveMessage(fname, lname, email, subject);
//    document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname,lname, email, subject){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    email: email,
    subject: subject,
  });
}
