// Importa la libreria ethers
import { ethers } from 'ethers';
import fs from 'fs';

// Carica l'ABI dal file
let contractABI;
try {
    const abiFile = fs.readFileSync('./abi.json', 'utf8');
    contractABI = JSON.parse(abiFile);
} catch (error) {
    console.error('Errore nel caricamento del file ABI:', error);
    process.exit(1);
}

// Configurazione della connessione RPC
const rpcUrl = 'https://finney.uomi.ai';
const provider = new ethers.JsonRpcProvider(rpcUrl);

// Indirizzo del contratto
const contractAddress = '0x609a8AEeef8b89BE02C5b59A936A520547252824'; // Sostituisci con l'indirizzo reale

async function main() {
    try {
        // Verifica della connessione
        const network = await provider.getNetwork();
        console.log(`Connesso alla rete: chainId ${network.chainId}`);
        
        // Creazione dell'interfaccia del contratto
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        
        // Chiamata alla funzione agents(1)
        const result = await contract.agents(4);
        console.log(`Risultato di agents(1): ${result}`);
        
    } catch (error) {
        console.error('Errore:', error);
    }
}

// Esegui la funzione principale
main();