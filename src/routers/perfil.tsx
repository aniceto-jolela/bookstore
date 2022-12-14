import React, { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";



const Perfil=()=>{

    const { keycloak } = useKeycloak();
    const [getName,setName] = useState<string | undefined>('')
    const [getEmail,setEmail] = useState<string | undefined>('')
    const [getFirstName,setFirstName] = useState<string | undefined>('')
    const [getLastName,setLastName] = useState<string | undefined>('')
    

    keycloak.loadUserProfile().then((info)=>{
        setName(info.username)
        setEmail(info.email)
        setFirstName(info.firstName)
        setLastName(info.lastName)
        console.log(info)
    })

    return(
        <>
            <h1>Perfil do usuário</h1>
            <div>
                {getName} | {getEmail} | {getFirstName} {getLastName}
            </div>
        </>
    )
}

export default Perfil