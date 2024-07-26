
// console.log(Math.PI);
// Math.PI =5;
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(descriptor);

const chai ={
    name:'ginger',
    price:230,
    isAvailable: false
}

Object.defineProperty(chai,'name',{
    Writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));