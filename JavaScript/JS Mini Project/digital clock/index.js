const clock = document.getElementById('clock');



setInterval(()=>{
    let newdate= new Date();
    // console.log(newdate.toLocaleTimeString());
    clock.innerHTML = newdate.toLocaleTimeString();
},1000)