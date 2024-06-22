//home section
var hamburgerBtn = document.querySelector('.navbar  .hamburger-btn');
var navList =document.querySelector('.navbar .navlist');
var navListItems =document.querySelectorAll('navlist li a');
hamburgerBtn.addEventListener('click', activeclass);

function activeclass(){
    hamburgerBtn.classList.toggle('active');
    navList.classList.toggle('active');
}
for(var i=0; i < navListItems.length; i++){
    navListItems[i].addEventListener('click', listItemClicked);
}

function listItemClicked(){
    hamburgerBtn.classList.remove('active');
    navList.classList.remove('active');

}