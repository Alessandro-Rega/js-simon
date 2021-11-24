const scritta = document.querySelector(".scritta");
scritta.innerHTML = "Hai 30 secondi per ricordarti questi numeri";

const cont = document.querySelector(".container");
const numeriRandom = [];
const numeriUtente = [];
for(let i = 0; i < 5; i++){
    numeriRandom.push(Math.floor(Math.random() * 99) + 1);
}
console.log(numeriRandom);
cont.innerHTML += 
`<span class="numero">${numeriRandom[0]}</span>
<span class="numero">${numeriRandom[1]}</span>
<span class="numero">${numeriRandom[2]}</span>
<span class="numero">${numeriRandom[3]}</span>
<span class="numero">${numeriRandom[4]}</span>`

setTimeout(function(){ 
    cont.innerHTML = "";
    scritta.innerHTML = "";
    for(let i = 0; i < 5; i++){
        const num = parseInt(prompt("Inserisci un numero"));
        if(numeriRandom.includes(num))numeriUtente.push(num);
        else numeriUtente.push(" ");
    }
    stampaNumeri();
}, 30000);


function stampaNumeri(){
    let indovinati = 0;
    for(let i = 0; i < numeriUtente.length; i++){
        cont.innerHTML += `<span class="numero">${numeriUtente[i]}</span>`
        numeriUtente[i] != " " ? indovinati++ : "" ;
    }
    scritta.innerHTML = `Hai indovinato ${indovinati} numeri`;
}