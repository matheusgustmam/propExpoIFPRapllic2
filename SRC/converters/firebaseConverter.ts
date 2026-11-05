import BaseModel from "../models/BaseModel"

// <> é uma implementacao de genercs no javascript
// generics e uma forma de definirmos o "tipo"/classe em tempo de ex
//
function firebaseConverter<T extends BaseModel>(ModelClass: new () => T): any {

    function toFirestore(value: BaseModel): any {
        return value.toFirestore()
    }

    function fromFirestore(snapshot: any, options: any): T {
        return new ModelClass().fromFirestore(snapshot, options) as T
    }

    return { toFirestore, fromFirestore }
}

export default firebaseConverter