var L='';//holds the ID

//GET ID
function getID(){
    L=window.localStorage.getItem('recipeid');
   console.log(L);
   passString(L);
}

function passString(optionch){
    window.localStorage.setItem('recipeid', optionch);
    window.location.href = '/common/recipe.html';
  }