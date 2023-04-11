/*++++++++++++++++++++++++++++++++++ASSIGNMENT:2+++++++++++++++++++++++++++++++++++++++++++*/
/*===================================QUESTION 1============================================*/
// function addNumber(num) {
//     return function(a) {
//       return num + a;
//     }
//   }
//   addingFive=addNumber(5)
//   console.log(addingFive(10));//Output will be 15
  

/*===================================QUESTION 2============================================*/
// let arr=[5,0,9,8,7,4]
// function search(arr,a) {
//   if(arr.length==0){
//         return false;
//         }
//         else if(arr[0]==a){
//             return true;
//         }
//     return search(arr.slice(1),a);
// }

// console.log( search(arr,9))//true
// console.log( search(arr,6))//false
/*===================================QUESTION 3============================================*/
//  function addParagraph(text) {
//   let newParagraph = document.createElement('p');
//   newParagraph.textContent = text;
//   document.body.appendChild(newParagraph);
// }

// addParagraph("Javascript is a scripting language, primarily designed for adding interactivity to web pages and web applications. It was developed by Brendan Eich, the language was first implemented by Netscape communications crop in 1995. JavaScript was originally developed  under the name Mocha , later it called as LIVESCRIPT. But, changed to javascript when it was deployed in the Netscape browser vwesion 2.0B3,  as a marketing ploy by Sun Microsystems  and Netscape.. Javascript is totally different from java languages, but the naming rules are quite similar. ")
/*===================================QUESTION 4============================================*/

// function newList(listItem) {
//    document.getElementById("fruitList").createElemnt("li")
// }
// function addItem(text) {
//    let newlist = document.getElementById("fruitList");
//    let newListItem = document.createElement('li');
//    newListItem.textContent = text;
//    newlist.appendChild(newListItem);
//  }
//  addItem("Orange")
 
/*===================================QUESTION 5============================================*/
// //Changing color of body element
// function bgcolor(ele,col){
//    document.body.style.backgroundColor = col;
// }
// // Targetting element
// let elementToBeColored = document.getElementById("back-color");
// // Calling function with required arguments
// bgcolor(elementToBeColored, "pink");





/*===================================QUESTION 6============================================*/
 
// function planeteria(planetKey,planetObj) {
//    localStorage.setItem("planetKey",JSON.stringify(planetObj));
// }
//      let Planets={
//         name:"EARTH",
//        position:3,
//      }
//      planeteria("Planets",Planets)

/*===================================QUESTION 7============================================*/
//  let newObj
// function planets(planetKey) {
//    // Retrieving object which was saved in Q6
//     return JSON.parse( localStorage.getItem("planetKey"));
    
// }


// let retrievedObj=planets("key")
// console.log(retrievedObj);


/*===================================QUESTION 8============================================*/
// //Passing parameter to function for object argument
// function teacherRecord(obj) {
//    // Storing each property in local storage
//    for (let key in obj) {
//      localStorage.setItem(key, obj[key]);
//    }
 
//    // Retrieving the object from local storage
//    const newTeacherObj = {};
//    for (const key in obj) {
//      newTeacherObj[key] = localStorage.getItem(key);
//    }
//   // Return the new object
//    return newTeacherObj;
//  }
//  // // Taking object to be input by a user
//  let Recorder={
//     name: prompt("ENTER YOUR NAME"),
//    age: +prompt("ENTER YOUR AGE"),
//     gender: prompt("ENTER YOUR GENDER"),
//  };
//  let newTeacherObj = teacherRecord(Recorder);
//   console.log(newTeacherObj);