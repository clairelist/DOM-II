// Your code goes here
//AND SO WE MEET AGAIN!

//first let's select some stuff
let alleLinks = document.querySelectorAll('nav a');
 console.log(alleLinks);

 let homeLink = document.querySelectorAll('nav a')[0]; //the 'home' link
// //on click, change link text to 'CLICKED!'
console.log(homeLink);

homeLink.addEventListener('click',function(event){
event.target.textContent = 'CLICKED!';
event.preventDefault();
});

//on 'escape' key, change text back to default

function escapeClicked(event){
    if(event.key==='Escape'){ //must be event.key or key will be undefined!
        homeLink.textContent='Home';
       
    }
}

document.addEventListener('keydown',escapeClicked);

////END HOME LINK STUFF

//lets on mouseover change the color of the links
let aboutLink = document.querySelectorAll('nav a')[1];

aboutLink.addEventListener('mouseenter',function(event){
    event.target.style.color = 'red';
});
aboutLink.addEventListener('mouseout',function(event){
    event.target.style.color='black';
});
// 
// console.log(aboutLink);

//on dblclick, increase counter under h1 by 1
//TO ADD:: ON HITTING 'ESCAPE', RESET COUNTER

let header = document.querySelector('h1');
console.log(header);

let count=0;

header.addEventListener('dblclick',function(event){
    
    event.target.textContent=`Fun Bus: ${count++}`;
});

function escapeCount(event){
    if(event.key==='Escape'){ //must be event.key or key will be undefined!
        header.textContent='Fun Bus';
        count=0;
       
    }
}

document.addEventListener('keydown',escapeCount);