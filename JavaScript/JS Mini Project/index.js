// const contValue =document.querySelector('#counter');
const contValue =document.getElementById('counter');
const increment = () => {
    // get the value from UI
    let value = parseInt (contValue.innerText);

    // increment the value
    value = value + 1;

    // set the value onto UI
    contValue.innerText = value;
};

    function decrement() {
     // get the value from UI
     let value = parseInt (contValue.innerText);

     // decrement the value
     value = value - 1;
 
     // set the value onto UI
     contValue.innerText = value;
};