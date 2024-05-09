async function utility(){
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output = await content.json();
    console.log(content);

}
utility();

async function helper(){
let option = {  
    method: 'POST',  
    body: JSON.stringify({  
      title: 'Divya',  
      body: 'chubby',  
      userId: 1998,  
    }),  
    headers: {  
      'Content-type': 'application/json; charset=UTF-8',  
    },  
};

let content =await fetch('https://jsonplaceholder.typicode.com/posts',option);
let response = content.json();
return response;
}

async function Util(){
    let ans = await helper();
    console.log(ans);
}
Util();