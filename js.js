var icon_menu = document.querySelector('.fa-bars')
var menu = document.querySelector('.menu_mb')
var icon_close = document.querySelector('.fa-times')
var submenu = document.querySelectorAll('.submenu')
var item = document.querySelectorAll('.listItem')
icon_menu.onclick = function(){
    menu.classList.toggle('active')
    icon_close.classList.toggle('active')
    icon_menu.classList.toggle('active')
}
icon_close.onclick = ()=>{
    menu.classList.toggle('active')
    icon_close.classList.toggle('active')
    icon_menu.classList.toggle('active')
}
item.forEach((value,idx) =>{
    var index = idx
    value.onclick = function(){
        value.lastElementChild.classList.toggle('active_submenu')
    }
  
})
