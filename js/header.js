let getNavBar = document.getElementById('nav-bar');

document.getElementById('navBar').addEventListener('click', function(){
    getNavBar.style.display = 'block'
    getNavBar.style.animation = 'nav-bar 500ms ease-in-out 1';

})
document.getElementById('navBarClose').addEventListener('click',function(){
    getNavBar.style.display = 'none'
    // getNavBar.style.animation = 'close-nav 500ms ease-in-out 1'
})


