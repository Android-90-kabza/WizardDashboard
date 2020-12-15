//login form
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

//main pags containers
const distributionButton = document.getElementById('distribute-button');
const returnsButton = document.getElementById('returns-button');
const repairsButton = document.getElementById('repairs-button');

const distributeContainer = document.getElementsByClassName('distribute-container');
const repairsContainer = document.getElementsByClassName('repairs-container');
const returnsContainer = document.getElementsByClassName('returns-container');


//functions for login page for SignUp and SignIn
signUpButton.addEventListener('click', () =>{
    container.classList.add("right-panel-active")
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active")
});

//functions for the main content page
distributionButton.addEventListener('click',()=>{
    distributeContainer
});

returnsButton.addEventListener('click',()=>{
    returnsContainer
});

repairsButton.addEventListener('click',()=>{
    repairsContainer
});