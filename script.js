// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.


window.onload = function () {

    const twitter = document.querySelector('.p-4:nth-child(3) li:nth-child(2)')



    twitter.remove()
    // twitter.style.display = "none"









    // EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".


    const links = document.querySelectorAll('.col-md-6 a')



    for (const link of links) {
        link.addEventListener('click', function (event) {

            link.parentElement.remove()

            //parentNode

            //event.target.closest(.row, .jumbutron)
            //event.target serve per individuare ciò che viene cliccato
        })
    }

    
    
    // EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
    
    const authors = document.querySelectorAll('.blog-post-meta a')
    
    for (const author of authors) {
        author.onmouseover = function () {
            
            alert(author.innerText)
        }
        
        
    }
    
    
}




