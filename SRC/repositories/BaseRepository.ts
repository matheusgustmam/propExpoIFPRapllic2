import BaseModel from "../models/BaseModel"
import { CollectionReference } from "firebase/firestore"

export abstract class BaseRepository<T extends BaseModel> {
    private collectionRef: CollectionReference;

    constructor(collectionName: string, modelClass: new () => T) {
        const converter = firebaseConverter<T>(modelClass)
        this.collectionRef = collection(db, collectionName).withConverter(converter)

    } 

    async salvar(entidade: T): Promise<T>{
        if (entidade.getId()) {
            const docRef = doc(this.collectionRef, entidade.getId())
            await setDoc(docRef, entidade)
            return entidade
        }else{
            await addDoc(this.collectionRef, entidade)
            return entidade
        }
        
    }

    async listarTodos(): Promise<T[]>{
        const snapshot = await getDocs(this.collectionRef)
        return snapshot.docs.map(doc => doc.data()) as T[]
    }

    async buscarId(id: string){
        const docRef = doc(this.collectionRef, id)
        const snapshot = await getDoc(docRef)
        return snapshot.data() as T
    }

    async buscarPorCampo(){

    }


    async deletar(){
        const docRef = doc(this.collectionRef, id)
        return deleteDoc(docRef)
    }
} 