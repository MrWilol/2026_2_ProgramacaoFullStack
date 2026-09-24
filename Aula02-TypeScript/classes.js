"use strict";
class Pessoa {
    nome;
    fone;
    constructor(nome, fone) {
        this.nome = nome;
        this.fone = fone;
    }
    imprimir() {
        console.log(`Nome: ${this.nome}\nTelefone: ${this.fone}`);
    }
}
class Juridica extends Pessoa {
    cnpj;
    constructor(name, fone, cnpj) {
        super(name, fone);
        this.cnpj = cnpj;
    }
    cadastrar() {
        console.log('Pessoa Juridica cadastrada com sucesso!');
        //const name: string | null = prompt("Digite o nome da PJ: ")
        //name ? this.nome = name : this.nome = ""
        //const fone: string | null = prompt("Digite o telefone: ")
        //fone ? this.fone = fone : this.fone = ""
        //const cnpj: string | null = prompt("Digite o CNPJ: ")
        //cnpj ? this.cnpj = cnpj : this.cnpj = ""
    }
}
class Fisica extends Pessoa {
    cpf;
    constructor(name, fone, cpf) {
        super(name, fone);
        this.cpf = cpf;
    }
    imprimir() {
        super.imprimir();
        console.log(`CPF: ${this.cpf}`);
    }
    cadastrar() {
        console.log('Pessoa Fisica cadastrada com sucesso"');
        // const name: string | null = prompt("Digite o nome:")
        //     name ? this.nome = name : this.nome = ""
        //  const fone: string | null = prompt("Digite o telefone:")
        //     fone ? this.fone = fone : this.fone = ""
        //  const cpf: string | null = prompt("Digite o CPF:")
        //     cpf ? this.cpf = cpf : this.cpf = ""
    }
}
const pf = new Fisica("Maria", "(51) 2233-4455", "000.111.222-34");
pf.cadastrar();
pf.imprimir();
const pj = new Juridica("Jonas Burguer", "(51) 98765=8765", "00.111.222/0001-33");
pj.cadastrar();
pj.imprimir();
