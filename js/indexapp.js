const recipeList = document.querySelector('#recipe-list');
const recipesearchList = document.querySelector('#recipesearch-list');



//To store id
function passString(optionch){
    window.localStorage.setItem('recipeid', optionch);
    window.location.href = '/common/recipe.html';
}

//getting specific data
function searchRecipe(){
    var searchquery = document.getElementById('searchfield').value;
    let searchtitle=document.createElement('h2');
    var seatitle = document.querySelector('#recipesearch-title');
    if(searchquery === "")
    {
        console.log(searchquery);
        //alert("Search Field is empty");
        searchtitle.textContent = 'Enter something in field to search';
        recipesearchList.appendChild(searchtitle);
    }else {
        searchtitle.textContent = 'Recipe search result for '+searchquery;
        recipesearchList.appendChild(searchtitle);
        docRef.collection('recipedata').where('rtitle', '==',searchquery).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                renderList(doc);
            })
        })
    }
    
}

//create element to render the recipe list
function renderRecipe(doc){

    let br=document.createElement('br');
    let li=document.createElement('li');
    let name= document.createElement('a');
    name.setAttribute('href', '#');
    //name.setAttribute('href', '/common/recipe.html');
    //+'/'+doc.id
    name.setAttribute('onclick', "passString('"+doc.id+"')");
    let author = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().rtitle;
    author.textContent = 'written by '+doc.data().rauthor+' on '+doc.data().rcreationtime;

    li.appendChild(name);
    li.appendChild(br);
    li.appendChild(author);
    recipeList.appendChild(li);

}

function renderList(doc){

    
    let br=document.createElement('br');
    let li=document.createElement('li');
    let name= document.createElement('a');
    name.setAttribute('href', '#');
    //name.setAttribute('href', '/common/recipe.html/'+'id='+doc.id);
    name.setAttribute('onclick', "passString('"+doc.id+"')");
    let author = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().rtitle;
    author.textContent = 'written by '+doc.data().rauthor+' on '+doc.data().rcreationtime;

    li.appendChild(name);
    li.appendChild(br);
    li.appendChild(author);

    recipesearchList.appendChild(li);

}




//getting the data
docRef.collection('recipedata').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderRecipe(doc);
    })
})
