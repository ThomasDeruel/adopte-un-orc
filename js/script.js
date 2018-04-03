var ui = {
  //menu
  menu:document.querySelector('.menu'),
  song:document.querySelector('.song'),
  volume:document.querySelector('.volume'),
  volume_container:document.querySelector('.volume-container'),
  start:document.querySelector('.menu-btn'),
  body:document.querySelector('.body'),
  cover:document.querySelector('.cover'),
  // part1
  prologue:document.querySelector('.prologue'),
  input:document.querySelector('.prologue-input'),
  name:document.querySelector('.prologue-name'),
  validate:document.querySelector('.prologue-btn'),
  data_user:document.querySelectorAll('span'),
  pro_text:document.querySelector('.prologue-text')
};
var prologue ={
  index:0,
  title:['Choisi ton nom','Es-tu un "homme" ou une "femme" ?','Aimes-tu plutôt les "orcs" ou les "orcesses" ?'],
}
var user = {
  love:0,
  friendly:0,
  life:3,
  name:"",
  sexe:"",
  orientation:""
};

volume();
start();
isactive();

ui.validate.addEventListener('click',function(){
if(ui.input.value !=="" && isNaN(ui.input.value)){
  recover();
  prologueNext();
}

})


function volume(){
ui.volume.addEventListener('change',function(){
  ui.song.volume = (ui.volume.value)/100;
})
}
function start(){
  ui.start.addEventListener('click',function(){
    ui.song.src="video/love.ogg";
    ui.song.removeAttribute('loop');
    transition();
  })
}
function transition(){
ui.cover.classList.add('invisible');
ui.volume_container.classList.add('invisible');
ui.menu.classList.add('invisible');
ui.cover.addEventListener('transitionend',function(){
  ui.name.textContent = prologue.title[prologue.index];
  ui.body.style.display="none";
  ui.prologue.style.display="flex";
  ui.name.textContent = prologue.title[prologue.index];
  ui.cover.classList.remove('invisible');
})
}
function recover(){
    switch(prologue.index){
      case 0 :
      user.name = ui.input.value;
      break;
      case 1 :
      user.sexe = ui.input.value;
      break;
      case 2 :
      user.orientation = ui.input.value;
      break;
  }
}
function prologueNext(){
  if(prologue.index < prologue.title.length-1){
    ui.validate.classList.remove('isactive');
    ui.input.value ="";
    prologue.index++;
    ui.name.textContent = prologue.title[prologue.index];
  }
  else{
  console.log("lol");
  ui.input.style.display="none";
  ui.name.style.display="none";
  ui.validate.style.display="none";
  ui.pro_text.style.display="block";
  userdata();
  }
}
function isactive(){
  ui.input.value="";
  ui.input.addEventListener('keyup',function(){
    if(ui.input.value !=="" && isNaN(ui.input.value)){
      ui.validate.classList.add('isactive');
    }
    else{
        ui.validate.classList.remove('isactive');
    }

  })
}
function userdata(){
  for (var i = 0; i < ui.data_user.length; i++) {
      switch(ui.data_user[i].dataset.user){
        case 'name' :
        ui.data_user[i].textContent = user.name;
        break;
        case 'sexe' :
        ui.data_user[i].textContent = user.sexe;
        break;
        case 'orientation' :
        ui.data_user[i].textContent = user.orientation;
        break;
      }
  }
}
