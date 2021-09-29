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
let response =await fetch("https://jimbex.github.io/webboard/test.json")
const songs = await response.json();
return songs;
}
myFetch().then(songs =>{ 
      const html = songs.map(user=>{
    
    return`
    <div class="row">

    
    <div class="col-6 d-flex">
        <div class="col-2">
            <h5> ${user.rank}</h5>
            <small>
                <i class="bi bi-arrow-up text-success Fw-bold h5"></i>
            </small>                    
        </div>
        <div class="col-10">
            <h6> ${user.song}</h6>
            <small> ${user.artist}</small>
        </div>
    </div>
    <div class="col-6">
        <div class="row">
            <div class="col-2"> ${user.rank}</div>
            <div class="col-2">
                <h6>
               
                </h6>
            </div>
            <div class="col-2">
                <h6>
                    1
                </h6>
            </div>
            <div class="col-2">
                <h6>
                ${user['Previous week']}
                </h6>
            </div>
            <div class="col-2">
                <h6>
                ${user["weeks on chart"]}
                </h6>
            </div>
            <!--here sha , since image is not part of the api it will just duplicate -->
            <div class="col-2">
                            <img src="https://charts-static.billboard.com/img/2003/03/kanye-west-0wf-155x155.jpg" class="img-fluid"
                                 alt="">
                        </div>

                        <div class="col-2">
                        <img src="https://charts-static.billboard.com/img/2021/06/walker-hayes-3ec-fancy-like-9nl-155x155.jpg" class="img-fluid"
                             alt="">
                    </div>
           </div>
        </div>
    </div> `   
  })
  .join("")
document.querySelector(".card1").insertAdjacentHTML("afterbegin", html)
   })
   



console.log(items)

