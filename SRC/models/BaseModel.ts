export default abstract class BaseModel {
    private id: string; | null ;
    private criadoEm: Date ;
    private atualizadoEm: Date ;

    constructor(dados?: any) {
        this.id = dado?.id || null
        this.criadoEm = new Date()
        this.atualizadoEm = new Date()
    }

    toFirestore(){
        const { ...dados } = this;
        return dados;
    }

    fromFirestore(snapshot: any, options: any){
        const dados = snapshot.data(options);
        this.id = dados.id || null
        this.criadoEm = dados.criadoEm || new Date();
        this.atualizadoEm = dados.atualizadoEm || new Date();
        return this
    }
}    