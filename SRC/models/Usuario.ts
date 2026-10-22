import basemodel from './BaseModel';
import { Enderco } from './Endereco';

export default class Usuario extends BaseModel {

    private nome: string;
    private email: string;
    private senha: string;
    private endereco: Enderco;

    constructor(dados?: any) {
        super(dados)
        this.nome = dados?.nome || null
        this.email = dados?.email || null
        this.senha = dados?.senha || null
        this.endereco = dados?.endereco || new Enderco()
    }

    override toFirestore(): any {
        const{ senha, ...dados } = this
        return {
            ...dados,
            endereco: this.endereco.toFirestore()
        }
    }

    override fromFirestore(snapshot, options): Usuario{
        super.fromFirestore(snapshot, options)
        const dados = snapshot.data(options)
        this.nome = dados.nome;
        this.email = dados.email;
        this.endereco = new Endereco(dados.endereco)
        return this
    }
    
    getNome(){
        retorn
    }

}