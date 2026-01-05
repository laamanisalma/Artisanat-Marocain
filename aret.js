let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
         btn.classList.add('active');
         let src = btn.getAttribute('data-src');
         document.querySelector('#img-slider').src = src;
    });
});




/*///////////////////////////*/
window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 );
});

function toggleMenu(){
    const tmenuToggle = document.querySelector('.menuToggle');
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
}





let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

/*
let nav = document.querySelector('.hedre .nav');
document.querySelector('#bars').onclick = () =>{
    nav.classList.add('active');
}
*/



document.querySelector('#nav-close').onclick = () =>{
    nav.classList.remove('active');
}
window.onscroll = () =>{
    nav.classList.remove('active');
}

/*///////////////*/ 
document.querySelector('#search-btn').onclick = () =>{
    nav.classList.remove('active');
}
window.onscroll = () =>{
    nav.classList.remove('active');
}
/*////////////login///////////*/ 
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.needs-validation');
let formClose = document.querySelector('#form-close');

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});


formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
/*//////////mune--------///////////// */

let menu = document.querySelector('#bars');
let navbar = document.querySelector('.nav');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
});
window.onscroll = () =>{
    nav.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}



/*66666666666666*/
const toggle=document.getElementById('toggleDark');
const body=document.querySelector('body');

toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background='white';
        body.style.color='black';
        body.style.transition='2s';
    
    }else{
        body.style.background='black';
        body.style.color='white';
        body.style.transition='2s'
    }
}
)


/**------------------------valid */

 document.querySelector('#email').addEventListener('blur', ValidateEmail);
 document.querySelector('#password').addEventListener('blur', validatePassword);
 document.querySelector('#username').addEventListener('blur', ValidateUsername);

 const reSpaces = /^\S*$/;
 function ValidateUsername(e) {
    const username = document.querySelector('#username');  
    
    if (reSpaces.test(username.value)) {
        username.classList.remove('is-invalid');
        return true;
    } else {
        username.classList.add('is-invalid');
        return false;
    }
 }
 function ValidateEmail(e) {
    const email = document.querySelector('#email');
    const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    if (reSpaces.test(email.value) && re.test(email.value)) {
        email.classList.remove('is-invalid');
        return true;
    } else {
        email.classList.add('is-invalid');
        return false;
    }
    
 }









   // JavaScript to disable form submissions if there are invalid fields
   (function() {
     const forms = document.querySelectorAll('.needs-validation');
     for (let form of forms) {
        form.addEventListener(
            'submit',
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
                form.classList.add('was-validated');
            },
            false
        );
     }
    })();
    
      // JavaScript to disable form submissions if there are invalid fields
      (function() {
        'use strict';
        window.addEventListener('load', function() {
           // Get the forms we want to apply validation styles
           var forms = document.getElementsByClassName('needs-validation');
           // Loop over them and prevent submission
           var validation = Array.prototype.filter.call(forms, function(form) {
             form.addEventListener('submit', function(event) {
               if (form.checkValidity() === false) {
                 event.preventDefault();
                 event.stopPropagation();
               }
               form.classList.add('was-validated');
             }, false);
           });
        }, false);
     })();