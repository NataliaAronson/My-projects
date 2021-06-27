//Java script for week 20 Super Heroes//
// we got data from the dqatabase on the server inJSON formate andstart work with it//
let Json = 
`[{  "image_url": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
     "Name":"Batman",
     "habitat":"DC Comics",
     "alterEgo":"Bruce Wayne",
     "activities":"a wealthy American playboy, philanthropist ",
     "friends":"Robin, Batgirl",
     "superpowers":"his own scientific knowledge, detective skills, and athletic prowess"
   
 },{ "image_url":"https://www.ellegirl.ru/articles/vse-o-15-samyih-krutyih-supergeroyah/",
     "Name":"Spiderman",
     "habitat":"Marvel Comics",
     "alterEgo":"Peter Parker",
     "activities":"saving people from trouble",
     "friends":"x-men",
     "superpowers":" superhuman strength and agility, and detecting danger with his 'spider-sense' "
         
 },{
    "image_url":"https://www.ellegirl.ru/articles/vse-o-15-samyih-krutyih-supergeroyah/",
    "Name":"Superman",
    "habitat":"DC Comics",
    "alterEgo":"Clark Kent",
    "activities":"fights evil with the aid of extraordinary abilities",
    "friends":"Krypto the Superdog",
    "superpowers":"mind-reading, mind-control and clairvoyance"
}]`;
            // we create the cards in steps to be displayed on the page//
            document.addEventListener("DOMContentloaded", function 
            (event){
                // change Json into the object  and  name it 'heros'//
                let heros = JSON.parse(Json); 
             // create the page layout, first create emply place //
                let herosContent = "";
               //creat content from data in a cycle for each object in the aray //
                for (let hero of heros) {
                 heroContent +=`<div class='Hero'>
                <img>${hero.image}</img>
                   <h2>${hero.name}</h2> 
                    <div> Habitat:${hero.habitat}</div>
                    <div> AlterEgo:${hero.alterEgo}</div>
                    <div> Activities:${hero.activities}</div>
                    <div> Friends:${hero.friends}</div>
                  </div>`;
                }
                //fill our container in html file with our page layout content//
                document.getElementById('herosContainer').innerHTML= heroContent;

            });

            
        function setRating(value, indexEl) {
          
           heros[indexEl].rate =+ value;
            saveInfo();
        }
