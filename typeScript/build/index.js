"use strict";
// Variáveis
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let ligado = true;
let numero = 22;
let altura = 1.7;
let texto = "isso é um texto";
//null
//undefinid
let nulo = null;
let indefinido = undefined;
// tipos abrangentes: void, any
let retorno; // nao me retorna nada
let retornoAny = "isso funciona"; // permite retornar qualquer coisa
// objeto - sem previsibilidade
let pessoa = {
    nome: "lucas",
    cidade: "brasília",
    idade: 21
};
let meuProduto = {
    nome: "Tênis",
    preco: 99.90,
    unidades: 21
};
// Arrays
let dados = ["uva", "maça", "peta"];
let dados2 = ["nao sei", "tmb nao sei"];
// arrays com dois tipos
let infos = [22, "amigo",];
// Tuplas 
// um array só que tem que respeitar a ordem dos tipos
let boleto = ["cobrança", 20.000, 32132131,];
// datas
let aniversario = new Date("2023-04-30 7:05");
// funções 
function soma(a, b) {
    return a + b;
}
let resultado = soma(2, 2);
function addToHello(name) {
    return `Hello ${name}`;
}
function phoneNumber(phone) {
    return phone;
}
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "lucas";
    });
}
// Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [8]);
console.log(numArray);
const strArray = concatArray(["a", "b"], ["z"]);
console.log(strArray);
