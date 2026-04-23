console.log("1 kg onions");
console.log("1 liter milk Packet");
for(let i = 0;i<=3000000000;i++){
  if(i==2000000000){
    console.log("1 onion dosa");//it takes long to execute until then below line will not execute
    //Single threaded synchronous programming
  }
}
console.log("drop sister at the school");



//Asyncronous programming
console.log("1 kg onions");
console.log("1 liter milk Packet");
setTimeout(function(){
  for(let i = 0;i<=3000000000;i++){
  if(i==2000000000){
    console.log("1 onion dosa");//it takes long to execute so it will execute after the below line
  }
}
},0);
console.log("drop sister at the school");


