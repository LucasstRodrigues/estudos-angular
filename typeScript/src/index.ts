// Variáveis

let ligado: boolean = true;
let numero: number = 22;
let altura: number = 1.7;
let texto: string = "isso é um texto";

//null
//undefinid

let nulo: null = null;
let indefinido: undefined = undefined;


// tipos abrangentes: void, any

let retorno:void; // nao me retorna nada
let retornoAny:any = "isso funciona"; // permite retornar qualquer coisa

// objeto - sem previsibilidade

let pessoa: object = {
    nome: "lucas",
    cidade: "brasília",
    idade: 21
}

// objeto tipado - com previsibilidade

type ProdutoLoja = {
    nome:string,
    preco:number,
    unidades:number
}

 let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 99.90,
    unidades: 21
 }


 // Arrays

 let dados: string[] = ["uva", "maça", "peta"]
 let dados2: Array<string> = ["nao sei", "tmb nao sei"]
// arrays com dois tipos
 let infos: (string | number)[] = [22, "amigo",]

 // Tuplas 
// um array só que tem que respeitar a ordem dos tipos
 let boleto: [string,number,number] = ["cobrança", 20.000, 32132131,]

 // datas

 let aniversario: Date = new Date("2023-04-30 7:05")


 // funções 

 function soma(a: number, b: number) :number {
    return a + b
 }

 let resultado: number = soma(2,2)

 function addToHello(name: string) : string {
    return `Hello ${name}`
 }

 function phoneNumber(phone: number | string) :number | string {
    return phone
 }

 async function getDataBase(id:number): Promise<string | number> {
    return "lucas"
 }

 // Generics

 function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens)
 }

 const numArray = concatArray<number[]>([1,5], [8])
 console.log(numArray)
 const strArray = concatArray<string[]>(["a", "b"], ["z"])
 console.log(strArray)
