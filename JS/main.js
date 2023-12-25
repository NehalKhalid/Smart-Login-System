var signUpNameInput = document.getElementById('signUpName');
var signUpEmailInput = document.getElementById('signUpEmail');
var signUpPassInput = document.getElementById('signUpPass');
var signInEmailInput = document.getElementById('signInEmail');
var signInPassInput = document.getElementById('signInPass');
var logInBtn = document.getElementById('login');
var emptyInputs = document.getElementById('required');
var userNameWelcome = document.getElementById('welcome');


var users = [];
if(localStorage.getItem('users') !== null){
    users = JSON.parse(localStorage.getItem('users'));
}
function signUp(){
    if(isSignUpInputsEmpty() === true){
        emptyInputs.innerHTML = '<span class="text-danger">All Inputs Are Required</span>';
        return true
    }
    if(checkEmailExist() === true){
        emptyInputs.innerHTML = '<span class="text-warning">Email Is Already Exist</span>';
        return true
    }
    if(validEmail() === true){
        var user ={
        name: signUpNameInput.value,
        email : signUpEmailInput.value,
        pass : signUpPassInput.value
        }
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
    emptyInputs.innerHTML = '<span class="text-success">Success</span>'
    console.log(users);
    }
    else{
        emptyInputs.innerHTML = '<span class="text-warning">Enter Valid Email</span>'
    }
}
function validEmail(){
    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regEmail.test(signUpEmailInput.value)===true) {
        return true
    }
    else{
        return false
    }
}
function checkEmailExist(){
    for(var i = 0;i < users.length ; i++){
        if(users[i].email === signUpEmailInput.value){
            return true
        }
    }
}
function isSignUpInputsEmpty(){
    if(signUpEmailInput.value == "" || signUpNameInput.value == "" || signUpPassInput.value == ""){
        return true
    }else{
        return false
    }
}

var userName =localStorage.getItem('UserName');
if(userName !== null){
    userNameWelcome.innerHTML = `Welcome ` + userName;
}
function logIn(){
    if(isSignInInputsEmpty() === true){
        emptyInputs.innerHTML = '<span class="text-danger">All Inputs Are Required</span>';
    }else{
        var email = signInEmailInput.value;
        var pass = signInPassInput.value;
        for(var i = 0 ;i < users.length ;i++){
            if(signInEmailInput.value === users[i].email && signInPassInput.value === users[i].pass){
                localStorage.setItem('UserName',users[i].name)
                logInBtn.href = "pages/hi.html";
            }
            else{
                emptyInputs.innerHTML = '<span class="text-warning">Incorrect Email Or Password</span>';
            }
        }
    }
}
function isSignInInputsEmpty(){
    if(signInEmailInput.value == '' || signInPassInput == ''){
        return true;
    }else{
        return false;
    }
}
function logOut(){
    localStorage.removeItem('UserName');
}