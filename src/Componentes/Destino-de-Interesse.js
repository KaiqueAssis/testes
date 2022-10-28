import React,{ useEffect, useState } from "react";
import Select from 'react-select';
import axios from 'axios';

export default function destinoInteresse(){

    const [paises, usePaises] = useState([""])
    const [cidades, useCidades] = useState([""])
    useEffect(() => {
        axios.get("https://amazon-api.sellead.com/country")
        .then(res => usePaises(res.data))
    }, [])

    useEffect(()=>{
        axios.get("https://amazon-api.sellead.com/city")
        .then(res=> useCidades(res.data))
    },[])

    console.log(paises)

    console.log(cidades)
    
    let pais = paises.map((pais)=> {return {value: pais.code, label: pais.name_ptbr, name: pais.name}})
    let  cidade = cidades.map((cidade) => { return { id: cidade.id ,value:cidade.name, name: cidade.name, pais: cidade.country_code, label: cidade.name_ptbr, url: cidade.url1}})
    return(
        <>
        <div className="formulario">
            <h1>Destino de Interesse</h1>
            <form>
                <label>Países</label>
                <Select className="select" isMulti options={pais} >
                    <option>Brasil</option>
                    <option>EUA</option>
                    <option>China</option>
                </Select>
                <label>Cidade</label>
                <Select className="select" isMulti options={cidade}>
                    
                </Select>
            </form>
        </div>
        </>
    )
}