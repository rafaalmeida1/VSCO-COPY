let signBtn = document.getElementById('sign-btn').addEventListener('click', signIn);
let signinButton = document.getElementById('backButton').addEventListener('click', backToHome);
let search = document.getElementById('search').addEventListener('click', searchForm);
let backHome = document.getElementById('backHome').addEventListener('click', back);
function signIn(){
    let signIn = document.getElementsByClassName('signin-page')[0];
    let form = document.getElementsByClassName('form')[0];
    form.style.display = 'flex'
    signIn.style.display = 'flex';
    signIn.style.animation = 'fadeIn 0.5s'
}

function searchForm(){
    let background = document.getElementsByClassName('search-background')[0];
    let searchForm = document.getElementsByClassName('searchForm')[0];
    searchForm.style.display = 'flex'
    background.style.display = 'flex';   
}

function back() {
    let background = document.getElementsByClassName('search-background')[0];
    let searchForm = document.getElementsByClassName('searchForm')[0];
    searchForm.style.display = 'none'
    background.style.display = 'none';
}

function backToHome(){
    let signIn = document.getElementsByClassName('signin-page')[0];
    let form = document.getElementsByClassName('form')[0];
    form.style.display = 'none'
    signIn.style.display = 'none';
}