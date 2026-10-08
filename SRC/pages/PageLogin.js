import { ScrollView, useState } from "react-native";
import { Button, Text, TextInput, Card } from "react-native-paper";
import useAuthService from "../services/loginService";
import { useState } from "react";

function PageLogin(){

    const [usuario, setUsuario] = useState({})
    const [secureText, setSecuriteText] = useState(false)
    const [loading, setLoading] = useState(false)
    const {loginEmailSenha, recuperarSenha} = useAnt

    async function logarUsuario() {
        try{
            setLoading(true)
            await loadingEmailSenha(usuario)
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