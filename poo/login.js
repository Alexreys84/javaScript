/**
 * Fundamentos da POO
 * Encapsulamentos
 * @author Alex Reis
 */
 
class User {
    //Atributos
    constructor(login, senha) {
        this.login = login
        //encapsilamento
        let_senha = senha
        this.getsenha =(parameter) => senha
        this.setsenha =(novaSenha) => senha = novaSenha 
    }
    //ações(métodos)
    logar(){
        console.log("________________")
        console.log('Usuáreio: ${this.login')
        console.log('senha: ${this.getSenha}')
        if(this.login === "admin" && this.getSenha()=== "123456"){
                          
        }else{
            console.log("Usuário e/ou senha invalida")
        }
       
    }
}
//sistema
conslo.clear()
const user1 = new user("admin","123")
user1.logar()
//usando o metodo setar uma nova senha (encapsulamento)
user1.setSenha("123456")
user1.logar()
export const funcionario5 = {
    nome: "cleo Pires",
    cargo: "atris",
    email: "cleo@sininho.com",
    salario: "R$100.000,00",
    armadura: {
        versao: "mark2",
        ano: "2010",
        reator: "Arc 01"
    },
    suitup: () => {
        console.log("🐲")
    }
}
