export default class BaseModel {
    id: string; | null ;
    criadoEm: Date ;
    atualizadoEm: Date ;

    constructor(dadis?: any) {
        this.id = dado?.id || null
        this.criadoEm = new Date()
        this.atualizadoEm = new Date()
    }

    toFirestore(){

    }

    fromFirestore(){
        
    }
}    