// const APIController = (function() {

//     const clientid = '';
//     const clientSecret = '';

//     // private methods 
//     const _getToken = async () => {

//          const result = await fetch('https://jimbex.github.io/webboard/africa100.json',{
//             method: "POST",
//             headers: {
//                 'Content-Type' : 'application/x-www-formurlencoded',
//                 'Authorization' : 'Basic ' + btoa(clientid + ':' + clientSecret)
//                 },
//                  body: 'grant_type=client_credentials'
//         });

//             const data = await result.json();
//             return data.access_token;
//         }
//         const _getsongs = async (token) => {

//             const data = await fetch{'https://jimbex.github.io/webboard/africa100.json}
//                 const result 
//                 method: 'GET',
//                 headers: {'Authorization' : 'Bearer'}
//             }
    
//         })();
//     })()

let items ;

async function myFetch( ){
let response =await fetch("https://jimbex.github.io/webboard/africa100.json")
const songs = await response.json();
return songs;
}
myFetch().then(songs =>{ 
    items = songs
   })
   
//    const html = items.map(user=>{
    
//     return `
   
//      <div class="row">
           
//            <div class="cell">
//                ${user['Previous week']}
//            </div>
//            <div class="cell">
//                ${user.artist}
//            </div>
//             <div class="cell">
//                ${user.song}
//            </div>
//             <div class="cell">
//                ${user["weeks on chart"]}
//            </div>
//        </div>`
       
    
    
//   })
//   .join("")
// document.querySelector(".table").insertAdjacentHTML("beforeend", html)


console.log(items)

