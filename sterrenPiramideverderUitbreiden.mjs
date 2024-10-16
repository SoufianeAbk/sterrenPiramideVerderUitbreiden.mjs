import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });
let antwoord = await userInput.question("Geef een hoogte in: ");
let hoogte = parseInt(antwoord);
let startTop = true;  
let startLeft = true;

for (let i = 1; i <= hoogte; i++) {
    if (startLeft) {
        let spaces = startTop ? ' '.repeat(hoogte - i) : '';
        console.log(`${spaces}${i.toString().repeat(i)}`);
    } else {
        let spaces = ' '.repeat(hoogte - i);
        console.log(`${i.toString().repeat(i)}${spaces}`);
    }
}

if (!startTop) {
    console.log('Piramide zonder top!');
}

process.exit();
