const start = document.querySelector('#Start').addEventListener('click', function(){
    console.log("hii" , Date.now())
})

const str = setInterval(start,2000);

const stop = document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(str)
    console.log("stooped", Date.now());
})

   
