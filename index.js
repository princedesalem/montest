const prompt = require('prompt-sync')();

function pairOuImpair(nombre) {
    if (nombre % 2 === 0) {
        console.log(`Le chiffre ${nombre} est pair et sa moitié est ${nombre / 2}`);
    } else {
        console.log(`Le chiffre ${nombre} est impair`);
        
        const diviseurs = [3, 5, 7, 9, 11, 13];
        let divisible = false;

        for (let diviseur of diviseurs) {
            if (nombre % diviseur === 0) {
                console.log(`${nombre} est divisible par ${diviseur}, résultat de la division : ${nombre / diviseur}`);
                divisible = true;
            }
        }
        
        if (!divisible) {
            console.log(`${nombre} n'est pas divisible par 3, 5, 7, 9, 11 ou 13`);
        }
    }
}

const nombre = parseInt(prompt("Entrez un nombre : "));
pairOuImpair(nombre);
