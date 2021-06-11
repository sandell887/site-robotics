var btnLogin= document.getElementById('btnLogin');
var inputEmail= document.getElementById('inputEmail');
var InputPassword= document.getElementById('InputPassword');

btnLogin.addEventListener('click', function() {

    firebase.auth().createUserWithEmailAndPassword(inputEmail.value, InputPassword.value).then(function(result){

alert("Usuário Conectado!");

console.log("success!")

    }).catch(function(error) {
        // Handle Errors here.
      
        var errorMessage = error.message;
        // ...

        alert(errorMessage);
        console.log("falha!")
      });

});