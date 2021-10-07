const listTousLesCours2 = document.querySelectorAll('.course__item'); //recuperation de tous les cours

// Creation du nouveau cours.
let element = document.createElement('div'); 
element.className = 'course__item'
element.innerHTML =                                     //Code HTML
` 
            <figure class="course_img">
                <img src="img/courses/logoPython.png">
            </figure>
            <div class="info__card">
                <h4>Python</h4>
                <figure class="mark m_4">
                    <img src="img/rates.png">                                       
                </figure>
                <p>
                    <span class="price">10000 €</span>
                    <span class="discount">999,99 €</span>
                </p>
                <p>
                    Disponible: <span class="stock">10</span>
                </p>
                <a href="#" class="add-to-cart" data-id="6"><i class="fa fa-cart-plus"></i>Ajouter au panier</a>
            </div>
`

listTousLesCours2[0].parentNode.appendChild(element); //Postionnement du cours avec le noeud parent.

let listTousLesCours = document.querySelectorAll('.course__item'); //recuperation de tous les cours.
let listStockCours = document.querySelectorAll('.stock'); //Récupération nombre en stock.
let btnemptyCart = document.querySelector('#empty-cart'); //Vider le panier.
let listHref = document.querySelectorAll('.add-to-cart'); //recuperation liste des boutons.


//activation du bouton ajouter au panier + decrementation du nb d'articles "disponible" 
for (let i = 0; i < listHref.length; i++) {
    listHref[i].addEventListener('click', btnAjouter)//création evenement btn ajout au panier      

}

// fonction permettant de diminuer le nb d'articles dispo jusqu'a 0 max    
function btnAjouter() {      //Fonction pour ajouter au panier

    let elementEnCours = this
    let indice = elementEnCours.getAttribute('data-id');
    console.log(indice);
    let test = listStockCours[indice - 1].textContent;
    
    if (parseInt(test) > 0) {
        //nb de stock supérieur à 0   
        listStockCours[indice - 1].textContent = (parseInt(listStockCours[indice - 1].textContent) - 1); //decrementation 
        let myh4 = elementEnCours.parentNode.querySelector('h4');
        let elements = myh4.textContent;
        console.log(myh4)
        let test = document.createElement('div');
        document.body.appendChild(test);
        let contenu = document.createTextNode("Merci d'avoir mis l'article dans le panier " + elements );
        test.appendChild(contenu);
        setTimeout(function() {contenu.remove()}, 3000);
    }
}

//bouton supprimer du panier a chaque cours
for (let a = 0; a < 6; a++) {         //afficher le bouton + enlever
    let boutonsupp = document.createElement('button');
    boutonsupp.innerHTML = 'supprimer du panier';
    boutonsupp.setAttribute('data-id', a)
    listTousLesCours[a].appendChild(boutonsupp);
    boutonsupp.addEventListener('click', btnEnlever)  //Action de clic sur le bouton supprimer
    boutonsupp.style.margin 
}


function btnEnlever() {      //fonction pour enlever du panier

    let elementEnCours = this
    let indice = elementEnCours.getAttribute('data-id'); //sert à récuperer l'indice sur lequel on appuie.
    let test = listStockCours[indice].textContent;
    if (parseInt(test) < 10) {      //nb de stock inférieur à 10  

        listStockCours[indice].textContent = (parseInt(listStockCours[indice].textContent) + 1); //decrementation

        //Notification pour retirer
        let myh4 = elementEnCours.parentNode.querySelector('h4'); //récupération des h4 par le noeud parent.
        let elements = myh4.textContent; //Récupéré le texte du h4
        let test = document.createElement('div');
        document.body.appendChild(test);
        let contenu = document.createTextNode("Dommage c'était quand même une belle offre " + elements);
        test.appendChild(contenu);
        setTimeout(function () { contenu.remove() }, 3000); // Timer de 3 secondes.
    }

}


btnemptyCart.addEventListener('click', ViderPanier) //création evenement vider le panier      

                              //Fonction permettant de vider d'articles dispo jusqu'a 10 max
function ViderPanier() {      //Fonction pour ajouter au disponibilité et retirer du panier.

    for (let i = 0; i < listStockCours.length; i++) {
        listStockCours[i].textContent = 10
    }
}



   





