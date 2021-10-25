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

