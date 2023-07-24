// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.


// aggiungere attributo con valore true

/* Selettore per il primo esercizio di JS */
// .p-4:nth-child(3) li:nth-child(2){
//     background-color: green;
//     }





window.onload= function(){

    const twitter= document.querySelector('.p-4:nth-child(3) li:nth-child(2)')




twitter.style.visibility= "hidden"









// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

const postContainer1= document.querySelector('.col')
const postContainer2= document.querySelector('div:nth-child(2) > div > div.col')
const bigPostContainer= document.querySelector('.col-md-6')

const aPost= document.querySelectorAll('.col a')  //PERCHE SE USO QUERY SELECTONALL NON FUNZIONA!!!!
const post= document.querySelector('.stretched-link')
const post2= document.querySelector('div:nth-child(2) > div > div.col > a')
const aBigPost=document.querySelector('.lead a')


aBigPost.addEventListener('click', function (event){
    
    bigPostContainer.remove()
    
})

post.addEventListener('click', function(event){
    
    
    postContainer1.remove()
})

post2.addEventListener('click', function(){
    
    postContainer2.remove()
    
})




}


// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

const author= document.querySelector('.blog-post-meta a') //CONTINUA A NON FUNZIONARE SE USO QUERYSELECTORALL!!!!!!

author.onmouseover = function(){

alert(author.innerText)

};

