console.log('Js Snack es6');
console.log('Snack 1');
/**SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo,
nome dell’ospite,
posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.
esempio:
{
  nomeTavolo: 'Tavolo VIP',
  nomeOspite: 'Brad Pitt',
  posto: 1
} */

function generateTable(VipName, TableName, siteNr) {
    //dichiaro l'oggetto da riempire ogni volta con i parametri che inserisco quando dichiaro la funzione
    const vip = {
        Table: TableName,
        name: VipName,
        site: siteNr,

    };
    // mi dara come valore di ritorno un oggetto con tutti i parametri inseriti durante l'invocazione della funzione
    return vip;
}

const invitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
const TavoloVIP = invitati.map((el,idx) =>{
    const vip = generateTable(el,'Tavolo VIP',idx + 1)
    return vip;
    
});

//let site = 1;
/*
for (let i = 0; i < invitati.length; i++) {
   
    
    let invitato = invitati[i];
    invitato = generateTable(invitato, 'Tavolo VIP', `${site++}`);
    //console.log(invitato);
    TavoloVIP.push(invitato);
    
   console.log(invitato)
}


*/
console.log(TavoloVIP);






/**SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l’elenco degli studenti:
Id   Name                    Grades
213  Marco della Rovere      78
110  Paola Cortellessa       96
250  Andrea Mantegna 	      48
145  Gaia Borromini          74
196  Luigi Grimaldello 	  68
102  Piero della Francesca   50
120  Francesca da Polenta    84 */

console.log('Snack 2');


let studentiUpperCase = [];

let voto70 = [];

let voto70Id120 = [];


let studenti = [
    {id:213, nome:'Marco della Rovere',voto:78},
    {id:110, nome:'Paola Cortellessa',voto:96},
    {id:250, nome:'Andrea Mantegna',voto:48},
    {id:145, nome:'Gaia Borromini',voto:74},
    {id:196, nome:'Luigi Grimaldello',voto:68},
    {id:102, nome:'Piero della Francesca',voto:50},
    {id:120, nome:'Francesca da Polenta',voto:84},
];


studentiUpperCase = studenti.map((el) => {
    let studente = {
        id: el.id,
        nome: el.nome.toUpperCase(),
        voto: el.voto
    }

    
    return studente
})

voto70 = studentiUpperCase.filter((el) =>{return el.voto > 70} )
voto70Id120 = studentiUpperCase.filter((el) =>{return el.voto > 70 && el.id > 120} )

/*
for (let i = 0; i < studenti.length; i++) {
    let studente = studenti[i]
    let studenteUp = studenti[i].nome.toUpperCase() 

    studentiUpperCase.push(studenteUp);

    studente = studenti[i]

    if (studente.voto > 70) {
        voto70.push(studente);
        if (studente.id > 120) {
            voto70Id120.push(studente);
        }
    }



};
*/
/*for (let i = 0; i < studentiObj.length; i++) {
    let studenteObj = studentiObj[i]

    console.log(studenteObj)
    if (studenteObj.voto > 70) {
        voto70.push(studenteObj);
        if (studenteObj.id > 120) {
            voto70Id120.push(studenteObj);
        }
    }
}
*/


//console.log(studentiObj);
console.log(studentiUpperCase);
console.log('array con solo voto > 70:', voto70);
console.log('array con voto > 70 e ID >120:', voto70Id120);

/*SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */
console.log('Snack 3');

function weightRandom(){
     

    let weight = (Math.random() * 10).toFixed(2);

    return weight;


}

//console.log(weight());



let bicicle = [
    {
        model:'Atala',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Bianchi',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Bottecchia',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Piaggio',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Pinarello',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Garelli',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Basso',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Carrera',
        weight: parseFloat(weightRandom())
    },

]

//let pesoMin = Math.min(...bicicle)





let lightestBike = bicicle[0]


for (let i = 1; i < bicicle.length; i++){
    
    if (bicicle[i].weight < lightestBike.weight){
        lightestBike = bicicle[i]
        
    }

    
}

const {model,weight} = lightestBike

console.log(bicicle)
console.log(lightestBike)
console.log(`La piu' leggera e' la ${model} con un peso di ${weight}kg`)

/*SNACK 4
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

console.log('Snack 4')

function generateSquad(squadName, pointsSquad, PenaltySquad) {
    //dichiaro l'oggetto da riempire ogni volta con i parametri che inserisco quando dichiaro la funzione
    const squad = {
        squad: squadName,
        points: pointsSquad,
        penatlty: PenaltySquad,

    };
    // mi dara come valore di ritorno un oggetto con tutti i parametri inseriti durante l'invocazione della funzione
    return squad;
}

let squads = [
    {
        name: 'Juventus',
        points: 0,
        penalty: 0
    },
    {
        name: 'Inter',
        points: 0,
        penalty: 0
    },
    {
        name: 'Lazio',
        points: 0,
        penalty: 0
    },
    {
        name: 'Roma',
        points: 0,
        penalty: 0
    },
    {
        name: 'Fiorentina',
        points: 0,
        penalty: 0
    },
    {
        name: 'Atalanta',
        points: 0,
        penalty: 0
    },
    {
        name: 'Sampdoria',
        points: 0,
        penalty: 0
    },
    {
        name: 'Torino',
        points: 0,
        penalty: 0
    },
    {
        name: 'Milan',
        points: 0,
        penalty: 0
    },
    {
        name: 'Lecce',
        points: 0,
        penalty: 0
    }
];

console.log('squadre :',squads)

//let squadsPointsPenalty = []

//let squadsOnlyNameAndPenalty = []

// for(let i = 0; i<squads.length; i++){
//     let squad = {
//         name: squads[i].name,
//         points : Math.floor(Math.random() * 30),
//         penalty : Math.floor(Math.random() * 7)
        
//     }

//     squadsPointsPenalty.push(squad)
// }


squads.forEach((squad) =>{
    squad.points = Math.floor(Math.random() * 30)
    squad.penalty = Math.floor(Math.random() * 7)
})

const {name,points,penalty}=squads

const squadNameAndPenalty = squads.map(({name,penalty}) =>{
    return `la squadra ${name} e ha ${penalty} falli`
})

console.log(squadNameAndPenalty)

//console.log('squadre con punti generati e falli generati:',squadsPointsPenalty)
//console.log('squadre con nomi e falli generati:',squadsOnlyNameAndPenalty)