abstract class Pessoa{
    nome: string;
    fone: string;
    constructor(nome:string, fone:string){
        this.nome = nome;
        this.fone = fone;
    }

    imprimir():void{
        console.log(`Nome: ${this.nome}\nTelefone: ${this.fone}`)
    }
    abstract cadastrar(): void;
}


class Juridica extends Pessoa{
    cnpj : string;
    constructor(name: string, fone: string, cnpj: string){
        super(name, fone)
        this.cnpj = cnpj

    }
    cadastrar(): void{
        console.log ('Pessoa Juridica cadastrada com sucesso!')
        //const name: string | null = prompt("Digite o nome da PJ: ")
        //name ? this.nome = name : this.nome = ""
        //const fone: string | null = prompt("Digite o telefone: ")
        //fone ? this.fone = fone : this.fone = ""
        //const cnpj: string | null = prompt("Digite o CNPJ: ")
        //cnpj ? this.cnpj = cnpj : this.cnpj = ""
    }
}




class Fisica extends Pessoa{
    cpf : string;
    constructor(name: string, fone: string, cpf: string){
        super(name, fone)
        this.cpf = cpf

    }

   imprimir(): void {
       super.imprimir()
       console.log(`CPF: ${this.cpf}`)
   }

   cadastrar(): void{
    console.log('Pessoa Fisica cadastrada com sucesso"')
    // const name: string | null = prompt("Digite o nome:")
    //     name ? this.nome = name : this.nome = ""
    //  const fone: string | null = prompt("Digite o telefone:")
    //     fone ? this.fone = fone : this.fone = ""
    //  const cpf: string | null = prompt("Digite o CPF:")
    //     cpf ? this.cpf = cpf : this.cpf = ""
   }
}


const pf = new Fisica("Maria", "(51) 2233-4455", "000.111.222-34");
pf.cadastrar()
pf.imprimir()

const pj = new Juridica("Jonas Burguer", "(51) 98765=8765", "00.111.222/0001-33");
pj.cadastrar()
pj.imprimir()