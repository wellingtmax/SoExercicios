import { Baleia } from "./baleia";
import { Morcego } from "./morcego";


const mor = new Morcego('Motta','stringFOX','amarela');
const bal = new Baleia('Filotão', 'barriga branca','preta')

bal.comer('peixes')
mor.comer('Banana')



console.log("\n" + "=".repeat(40) + "\n");
console.log(mor.voar())
console.log(bal.nadar())
console.log("\n" + "=".repeat(40) + "\n");