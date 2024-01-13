let body = document.querySelector('body');
let navbar = document.querySelector('.nav-bar');
let navul = document.querySelector('.navul');
let checkbox = document.querySelector('.checkbox');
let a = document.querySelectorAll('.aa');

checkbox.addEventListener('click',()  => {
    if(checkbox.checked)
    {
        body.style.background = '#575656'
navul.style.background = 'rgba(255,255,255,0.3)';
        navbar.style.background = 'black';
a[0].style.color = 'white';     
a[1].style.color = 'white';  
a[2].style.color = 'white';  
a[3].style.color = 'white';  
    }
    else{
        body.style.background = 'rgb(255, 248, 239)';
        navbar.style.background = 'bisque';
        navul.style.background='rgb(255, 209, 108)';
        a[0].style.color = '#777';
        a[1].style.color = '#777';
        a[2].style.color = '#777';
        a[3].style.color = '#777';
    }
})