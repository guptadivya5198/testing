const syaHello=function(){
    console.log("Hello");
}
    const changeText = function(){
        document.querySelector('h1').innerHTML ='Chai or Js'
    }
setTimeout(syaHello,2000);
const time = setTimeout(changeText,2000);

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(time);
    console.log("stopped");
})