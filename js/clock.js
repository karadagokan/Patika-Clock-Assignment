let userName;
let timer=null;
let setClock;
while(true){
    userName=prompt("Hoşgeldiniz Lütfen İsminizi Giriniz: ");
    if(userName)
        break;
}

document.getElementById('myName').innerText=userName;

setClock=document.getElementById('myClock');

timer = setInterval(function () {
    let date=new Date();
    setClock.innerText=`${date.toLocaleTimeString()} ${date.toLocaleDateString('tr-TR',{ weekday: 'long' })}`;
  }, 100);



