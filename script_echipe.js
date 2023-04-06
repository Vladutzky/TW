var rideri=document.getElementsByTagName("div");
var rider;
function rndminmax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; //nr random intre min si max
}
setInterval(function(){
for (rider of rideri){  
    
    if(rider.id=="Bagnaia"){
    var nm=rider.className;
    
    nm = nm.slice(0, -1);
   rider.className= nm+(rndminmax(1,1000)%5+1);
   console.log(rider.className);}
}
},1000);
