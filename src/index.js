let signBtn = document.getElementById('sign-btn').addEventListener('click', signIn);
let signinButton = document.getElementById('backButton').addEventListener('click', backToHome);
function signIn(){
    let signIn = document.getElementsByClassName('signin-page')[0];
    signIn.style.display = 'flex';
    signIn.style.animation = 'fadeIn 0.5s'
}

function backToHome(){
    let signIn = document.getElementsByClassName('signin-page')[0];
    signIn.style.display = 'none';
}