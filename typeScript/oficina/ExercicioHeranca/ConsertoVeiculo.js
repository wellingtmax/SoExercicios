"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consertar = void 0;
const oficinaMecanica_1 = require("./oficinaMecanica");
class Consertar extends oficinaMecanica_1.ModeloCarro {
    constructor(id, nome, marca, ano, corCarro) {
        super(id, nome, marca, ano);
        this._corCarro = corCarro;
    }
    get corCarro() {
        return this._corCarro;
    }
    set corCarro(corCarro) {
        this.corCarro = corCarro;
    }
    fazerSom() {
        console.log("Vruummmm");
    }
}
exports.Consertar = Consertar;
