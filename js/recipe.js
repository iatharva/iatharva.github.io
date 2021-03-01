var L='';//holds the ID
const authr = document.querySelector('#titlewitha');
const titler = document.querySelector('#recipeTitle');
const info = document.querySelector('#details');
const descrir = document.querySelector('#about');
const ingredr = document.querySelector('#ingred');
const instrucr = document.querySelector('#instruction');
const tipsr = document.querySelector('#bonustips');

//GET ID
function getID(){
     L=window.localStorage.getItem('recipeid');
    console.log(L);
    LoadRecipe();
}

//getting specific data
function LoadRecipe(){
        docRef.collection('recipedata').doc(L).get()
        .then(function(doc){

        //Author
        let auth=document.createElement('h4');
        auth.textContent = 'written by: '+doc.data().rauthor;
        titlewitha.appendChild(auth);

        //Title
        titler.textContent = doc.data().rtitle;

        //Description
        descrir.textContent = doc.data().rabout;

        //Recipe Info
        let tt=document.createElement('p');
        let sr=document.createElement('p');
        let cs=document.createElement('p');
        let cu=document.createElement('p');
        tt.textContent = 'Total Time For Making recipe: '+doc.data().rtime+' mins';
        sr.textContent = 'Serves: '+doc.data().rserve+' people';
        cs.textContent = 'Cuisine: '+doc.data().rcuisine+' origin';
        cu.textContent = 'Course: '+doc.data().rcourse+' course';
        info.appendChild(tt);
        info.appendChild(sr);
        info.appendChild(cs);
        info.appendChild(cu);

        //Ingredients
        
        //Steps
        instrucr.textContent = doc.data().rsteps;
        //Tips
        tipsr.textContent = doc.data().rtips;
    })
}

/*
function renderData(doc){
}
*/
