let taskbar = document.getElementsByClassName('taskbar')[0];
let startmenu = document.getElementsByClassName('startmenu')[0];
let vscode = document.getElementById('vsi');
let vscodeimg = document.getElementById('vs');

// Chrome 
let ch = document.getElementById('chrome');
let chimg = document.getElementById('chromo');

// Bing
let bi = document.getElementById('edge');
let biimg = document.getElementById('bing');

// Discord
let discord = document.getElementById('discord');
let disimg = document.getElementById('dis');

// Recycle Bin
let bin = document.getElementById('recycle');
let binimg = document.getElementById('bin');

// FIle explorer
let file = document.getElementById('start');
let fileimg = document.getElementById('fileex');


taskbar.addEventListener('click',()=>{
  if(startmenu.style.bottom=="50px"){
      startmenu.style.bottom = "-655px"
  }
  else{
      startmenu.style.bottom = "50px";
  }
});

vscode.addEventListener("click" , ()=>{
  console.log('clicked');
  if(vscodeimg.style.bottom == "0px" && vscodeimg.style.top=="0px"){
    vscodeimg.style.bottom = "-3000px";
    vscodeimg.style.top = "3000px";
  }
  else{
      vscodeimg.style.bottom = "0px";
      vscodeimg.style.top="0px";
  }
});

// Chrome

ch.addEventListener("click" , ()=>{
  console.log('clicked');
  if(chimg.style.bottom == "0px" && chimg.style.top=="0px"){
    chimg.style.bottom = "-6000px";
    chimg.style.top = "6000px";
  }
  else{
      chimg.style.bottom = "0px";
      chimg.style.top="0px";
  }
});

// edge
bi.addEventListener("click" , ()=>{
  console.log('clicked');
  if(biimg.style.bottom == "0px" && biimg.style.top=="0px"){
    biimg.style.bottom = "-5000px";
    biimg.style.top = "5000px";
  }
  else{
      biimg.style.bottom = "0px";
      biimg.style.top="0px";
  }
});

// Discord
discord.addEventListener("click" , ()=>{
  console.log('clicked');
  if(disimg.style.bottom == "0px" && disimg.style.top=="0px"){
    disimg.style.bottom = "-4000px";
    disimg.style.top = "4000px";
  }
  else{
      disimg.style.bottom = "0px";
      disimg.style.top="0px";
  }
});

// Recycle
bin.addEventListener("click" , ()=>{
  console.log('clicked');
  if(binimg.style.bottom == "0px" && binimg.style.top=="0px"){
    binimg.style.bottom = "-7000px";
    binimg.style.top = "7000px";
  }
  else{
      binimg.style.bottom = "0px";
      binimg.style.top="0px";
  }
});

// FIle explorer
file.addEventListener("click" , ()=>{
  console.log('clicked');
  if(fileimg.style.bottom == "0px" && fileimg.style.top=="0px"){
    fileimg.style.bottom = "-8000px";
    fileimg.style.top = "8000px";
  }
  else{
      fileimg.style.bottom = "0px";
      fileimg.style.top="0px";
  }
});