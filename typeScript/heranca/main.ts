import { AnimalEstimacao } from "./animal";
import { Gato } from "./gato";
import { Cachorro } from "./cachorro";

console.log("=== EXEMPLO DE HERANÇA ===");

// Criando um gato
const cat = new Gato('Thor', 2, 'Siames', 'Preto');
console.log(`Gato: ${cat.getNome()}, ${cat.getIdade()} anos, raça ${cat.getRaca()}`);
console.log(`Cor do pelo: ${cat.corDoPelo}`);
cat.fazerSom();
cat.mover();

console.log("---");

// Criando um cachorro
const dog = new Cachorro('Rex', 3, 'Vira-Lata', 50);
console.log(`Cachorro: ${dog.getNome()}, ${dog.getIdade()} anos, raça ${dog.getRaca()}`);
console.log(`Tamanho: ${dog.tamanho}cm`);
dog.fazerSom();
dog.mover();