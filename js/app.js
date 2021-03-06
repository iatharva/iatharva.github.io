// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD73qTUAna49Or8kFlhrB1x2SYMDfspw3s",
  authDomain: "recipeproject-3bee2.firebaseapp.com",
  projectId: "recipeproject-3bee2",
  storageBucket: "recipeproject-3bee2.appspot.com",
  messagingSenderId: "406351861274",
  appId: "1:406351861274:web:a082371a3b56d4f38663a3",
  measurementId: "G-V2VRNKG2L6"
};

//Show status of form 
function passString(optionch){
  window.localStorage.setItem('recipeid', optionch);
  window.location.href = '../common/status.html';
}

//getting current time and date
var currentdate = new Date();
var datetime =  currentdate.getDate() + "/" + (currentdate.getMonth()+1) 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const docRef = firebase.firestore();

  //basic info
  const fTitle = document.querySelector("#recipeTitle");
  const fAuthor = document.querySelector("#authorName");
  const fAbout = document.querySelector("#abtRecipe");

  //detail info
  const fTime = document.querySelector("#totalTime");
  const fServes = document.querySelector("#serves");
  const fCuisine = document.querySelector("#cuisine");
  const fCourse = document.querySelector("#course");

  //ingredients
  const nOfIngre = document.querySelector("#noOfIngredient");
  var fallIngre =[];
  var fallQuan = [];

  const fsteps = document.querySelector("#steps");
  const ftips = document.querySelector("#tips");

  const fsubmit = document.querySelector("#submit");

  fsubmit.addEventListener("click", function() {

    if(!fTitle.value || !fAuthor.value || !fAbout.value || !fTime.value || !fServes.value || !fCuisine.value || !fCourse.value || !fsteps.value || !ftips.value || !nOfIngre.value){
      alert("Fill all the fields");
    }else{

      getingredientvalue();
      saverecipe();
    }
    });

//get values of ingredients
function getingredientvalue(){

  console.log(nOfIngre.value);

   var table = document.getElementById("table");
   for(var i=1; i<table.rows.length;i++){

    
    var tempi =(table.rows[i].cells[1]).firstChild.value;
    fallIngre.push(tempi);

    var tempq =(table.rows[i].cells[2]).firstChild.value;
    fallQuan.push(tempq);

   }

}

//to save data in firestore
function saverecipe(){

  docRef.collection("recipedata").add(
    {
      rtitle: fTitle.value,
      rauthor: fAuthor.value,
      rabout: fAbout.value,
      rcreationtime: datetime,

      rtime: fTime.value,
      rserve: fServes.value,
      rcuisine: fCuisine.value,
      rcourse: fCourse.value,

      ringre: firebase.firestore.FieldValue.arrayUnion.apply(this, fallIngre),
      rquan: firebase.firestore.FieldValue.arrayUnion.apply(this, fallQuan),

      rsteps: fsteps.value,
      rtips: ftips.value

    }
    ).then(function(docRef){
        console.log("Document written with ID -", docRef.id);
        passString(docRef.id);
      }
    ).catch(function(error){
        console.error("Error while adding document ", error);
        window.location.href='../common/nstatus.html';
      })
}


