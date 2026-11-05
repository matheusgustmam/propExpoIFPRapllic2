import { ScrollView} from "react-native";
import { Button, Text, TextInput, Card } from "react-native-paper";
import useAuthService from "../services/loginService";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function PageLogin(){

    const [usuario, setUsuario] = useState({})
    const [secureText, setSecuriteText] = useState(false)
    const [loading, setLoading] = useState(false)
    const {loginEmailSenha, recuperarSenha} = useAnthService()
    const navigation = useNavigation()

    function handleOnChangeText(){

    }

    async function logarUsuario() {
        try{
            setLoading(true)
            await loadingEmailSenha(usuario)
            alert("Logado com sucesso!")
        } catch (err){
            console.error(err)
            alert("Erro ao logar")
        } finally {
            setLoading(false)
        }
    }


    async function recuperarSenha() {
        try{
            setLoading(true)
            await recuperarSenha(usuario)
        } catch (err) {
            console.erro
        }
    }

    return{

    }

}

export default PageLogin;