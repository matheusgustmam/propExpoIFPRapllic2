export default abstract class BaseModel {
    private id: string | null;
    private criadoEm: Date;
    private atualizadoEm: Date;

    constructor(dados?: any) {
        this.id = dados?.id || null
        this.criadoEm = dados?.criadoEm || new Date()
        this.atualizadoEm = dados?.atualizadoEM || new Date()
    }

    toFirestore(): any {
        const { ...dados } = this;
        return dados;
    }

    fromFirestore(snapshot: any, options?: any): BaseModel {
        const dados = snapshot.data(options);
        this.id = dados.id 
        this.criadoEm = dados.criadoEm 
        this.atualizadoEm = dados.atualizadoEm
        return this
    }

    getId(): string | null {
        return this.id
    }

    getCriadoEM(): Date{
        return this.criadoEm
    }

    getAtualizado(): Date{
        return this.atualizadoEm
    }
    setId(id: string | null){
        this.id = id
    }

    setAtualizadoEm(atualizadoEm: Date){
        this.atualizadoEm = atualizadoEm;
    }

    
}    
