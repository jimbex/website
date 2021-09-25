
let items ;

async function myFetch( ){
let response =await fetch("https://jimbex.github.io/webboard/africa100.json")
const songs = await response.json();
return songs;
}
myFetch().then(songs =>{ 
    items = songs
   })
   
    const html = items.map(user=>{
    
     return `
   
      <div class="row">
           
            <div class="cell">
                ${user['Previous week']}
            </div>
            <div class="cell">
                ${user.artist}
            </div>
             <div class="cell">
                ${user.song}
            </div>
             <div class="cell">
                ${user["weeks on chart"]}
            </div>
       </div>`
       
    
    
   })
   .join("")
 document.querySelector(".table").insertAdjacentHTML("beforeend", html)


console.log(items)
