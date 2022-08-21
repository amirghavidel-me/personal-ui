
var $ = document
const menuBurger = $.querySelector(".menu-burger")
const barItem = $.querySelector(".bar-item")
var bool = true

menuBurger.addEventListener("click", ()=>{
     if(bool == true){
          menuBurger.classList.add('open')
          barItem.classList.add('bar-anim')
          bool = false
     }else{
          menuBurger.classList.remove('open')
          barItem.classList.remove('bar-anim')
          bool = true
     }

})


let colorSet = true;

let darkMood = $.querySelector('.DarkMood')
darkMood.addEventListener('click' , ()=> {
     if(colorSet == true){
          var backGround = $.body;
          backGround.classList.add('Dark');
          colorSet = false;
     }else{
          var backGround = $.body
          backGround.classList.remove('Dark');
          colorSet = true;
     }
     
})

     