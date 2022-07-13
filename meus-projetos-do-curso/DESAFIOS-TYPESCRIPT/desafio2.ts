/* Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

//RESPOSTA 

enum profissao {
    Atriz,
    Padeiro
}

type dadosPessoais = {
    nome: string,
    idade: number,
    ocupacao: profissao
}

let usuario1: dadosPessoais = {
    nome: 'Gabriela',
    idade: 23,
    ocupacao: profissao.Atriz
};

let usuario2: dadosPessoais = {
    nome: 'roberto',
    idade: 19,
    ocupacao: profissao.Padeiro
};

let pessoa3: dadosPessoais = {
    nome: 'Fernanda',
    idade: 29,
    ocupacao: profissao.Atriz
};

let pessoa4: dadosPessoais = {
    nome: "carlos",
    idade: 19,
    ocupacao: profissao.Padeiro
}
