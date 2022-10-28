import React from "react";



export default function dados(){

    
    return(
    <>
    <div className="formulario">
        <h1>Dados Pessoais</h1>
        <form>
            <label >Nome</label>
            <input type="text" name="Nome"/>
            <label>Email</label>
            <input name="Email"/>
            <label>Telefone</label>
            <input type="number" name ="Senha"/>
            <label>CPF</label>
            <input type="number" name="CPF"></input>
        </form>
    </div>
    </>
    )
}