// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede


const teamInfo = [

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }  

];

const infoElement = document.querySelectorAll(".card");

// Itero attraverso teamInfo e inserisco il contenuto nelle card 
for (let i = 0; i < teamInfo.length; i++) {

    const actualObject = teamInfo[i];
    const cardMember = infoElement[i];

// Inserisco le immagini nelle card
    const memberImg = cardMember.querySelector(".card-img-top");
    memberImg.src = actualObject.image;

// Cambio il titolo delle card con il nome di ogni membro
    const memberName = cardMember.querySelector(".card-title");
    memberName.innerText = actualObject.name;

// Inserisco il ruolo di ogni membro nelle card
    const memberRole = cardMember.querySelector(".card-text");
    memberRole.innerText = actualObject.role;

    // for (let key in actualObject) {
    //     console.log(`${key}: ${actualObject[key]}`);
    // }
    
}

