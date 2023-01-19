


// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

  const recipeesURL = `${baseServerURL}/recipeIngredients?_limit=10&_page=1` 
const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

  let mainSection = document.getElementById("data-list-wrapper");
  let notificationWrapper = document.getElementById("notifications-wrapper");

  let getEmployeeButton = document.getElementById("fetch-employees")

   let getRecipeesButton = document.getElementById("fetch-Recipees")
   
   getRecipeesButton.addEventListener("click",()=>{
  //  renderCards()
   fetch(recipeesURL )
    
   .then((res)=>{

     return res.json();
   }).then((data)=>{

    console.log(data)

    
      // let dataPre = document.createElement("pre")

      // dataPre.append(JSON.stringify(data,null,2))

      //   mainSection.append(dataPre)

       mainSection.innerHTML = 

       <pre class="employee">
         ${JSON.stringify(data,null,2)}
       </pre>
     
   })

   })

//      function renderCards(){

//       let cardData = [
//         {
//           title : "Title",
//           description :" jghffgjhkjlljkhjghfgdfgfhgjhkjlkjhjghfgdhvbjn",
//           LinkText : "Read More",
//           linkUrl : "http.//google.com",
//           imageUrl :"http://localhost:9090/images/recipe-ingredient/Avocado.png"


//         },
//         {
//           title : "Title2",
//           description :" jghffgjhkjlljkhjghfgdfgfhgjhkjlkjhjghfgdhvbjn",
//           LinkText : "Read More",
//           linkUrl : "http.//google.com",
//           imageUrl :"http://localhost:9090/images/recipe-ingredient/Avocado.png"


//         },
//         {
//           title : "Title3",
//           description :" jghffgjhkjlljkhjghfgdfgfhgjhkjlkjhjghfgdhvbjn",
//           LinkText : "Read More",
//           linkUrl : "http.//google.com",
//           imageUrl :"http://localhost:9090/images/recipe-ingredient/Avocado.png"


//         }
//       ]

//       let card = <div class ="card">

//       <div class = "card_img">
//        <img src = "http://localhost:9090/images/recipe-ingredient/Avocado.png"
//  alt="food"/>
       
//       </div>

//        <div class="card_body">

//         <h3 class = "card_item">Title </h3>
//           <div class="card_description">
//             ${cardData[0].description}
//           </div>
//           <a href="#" class ="card_link">${cardData[0].LinkText}</a>
//        </div>
//    </div>


//   let cardlist = 
//      <div class= "card_list">
//        ${card}
//      </div>

//        mainSection.innerHTML = cardlist
//      }
 

   


// let paginationWrapper = document.getElementById("pagination-wrapper");

// let loginUserUsername = document.getElementById("login-user-username");
// let loginUserPassword = document.getElementById("login-user-passowrd");

// let loginUserButton = document.getElementById("login-user");
// let getTodoButton = document.getElementById("fetch-todos");

// let mainSection = document.getElementById("data-list-wrapper");
// let notificationWrapper = document.getElementById("notifications-wrapper");

// let userAuthToken = localStorage.getItem("localAccessToken") || null;
// let userId = +localStorage.getItem("userId") || null;
// const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
// const urlTodosBase = `${baseServerURL}/todos/`;