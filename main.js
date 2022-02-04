const cats = [
    {name: 'Jerry', color: 'Gray'},
    {name: 'Felix', color: 'Black and White'},
    {name:'Garfield',color:'Orange'},
];

cats.forEach((element) => {
    console.log(`${element.name}'s color is ${element.color}`);
});


/* map */

const myarray = [1,2,3,4,5,6,7,8,9];
const pow = [];

for(let i =0; i<myarray.length; i++) {
    pow.push( myarray[i] ** 3 );
}

//const cubo = myarray.map( numero => numero ** 3);
// è identica a, ma senza parentesi si puo usare solo se c'è un parametro
const cubo = myarray.map( (numero) => numero ** 3);

console.log(cubo);



const arrayDiNumeri = [1,2,3,4,5,6,7,8,9];
const pari = [];

for(let i =0; i<arrayDiNumeri.length; i++) {
    if (arrayDiNumeri[i] % 2 == 0) {
        pari.push(arrayDiNumeri[i]);
    }
}

console.log(pari);

const nuovoPari = arrayDiNumeri.filter((numero) => {
    return numero % 2 == 0
});

console.log(nuovoPari);