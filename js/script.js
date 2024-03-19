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

function generateStudentStatus(idStudente, nomeStudente, votoStudente) {
    //dichiaro l'oggetto da riempire ogni volta con i parametri che inserisco quando dichiaro la funzione
    const vip = {
        id: idStudente,
        nome: nomeStudente,
        voto: votoStudente,

    };
    // mi dara come valore di ritorno un oggetto con tutti i parametri inseriti durante l'invocazione della funzione
    return vip;
}

const studentiUpperCase = [];

const voto70 = [];

const voto70Id120 = [];

const studentiObj = []

const studenti = [
    'Marco della Rovere',
    'Paola Cortellessa',
    'Andrea Mantegna',
    'Gaia Borromini',
    'Luigi Grimaldello',
    'Piero della Francesca',
    'Francesca da Polenta'
];

const ids = [213, 110, 250, 145, 196, 102, 120];
const voti = [78, 96, 48, 74, 68, 50, 84];

for (let i = 0; i < studenti.length; i++) {
    let studente = studenti[i].toUpperCase()

    studentiUpperCase.push(studente);


    studente = generateStudentStatus(ids[i], studente, voti[i])

    studentiObj.push(studente);

    if (studente.voto > 70) {
        voto70.push(studente);
        if (studente.id > 120) {
            voto70Id120.push(studente);
        }
    }



};

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


console.log(studentiObj);
//console.log(studentiUpperCase);
console.log('array con solo voto > 70:', voto70);
console.log('array con voto > 70 e ID >120:', voto70Id120);