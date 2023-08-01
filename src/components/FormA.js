import { useState } from "react"

export default function FormAutor() {

    const [nome, setNome] = useState("")
    const [canal, setCanal] = useState("")
    const [urlCanal, setUrlCanal] = useState("")

    const salvarAutor = (evento) => {
        evento.preventDefault();
        const novoAutor = {
            id: Math.random().toString(36).slice(2, 7),
            nome: nome, 
            canal: canal,
            urlCanal: urlCanal
        }   
        const temRegistro = JSON.parse(localStorage.getItem("listadeautores")) != null
        const autores = temRegistro ? JSON.parse(localStorage.getItem("listadeautores")) : []
        autores.unshift(novoAutor)
        localStorage.setItem("listadeautores", JSON.stringify(autores))
        setNome("")
        setCanal("")
        setUrlCanal("")
    }

    return(
        <div className="bg-zinc-900 grid grid-cols-3 gap-4 content-start rounded p-6">
            <h2 className="text-xl p-6 pl-0 pt-0">Cadastro de Autores</h2>
            <form className="bg-zinc-800 grid p-6 mt-24 grid-cols-1 gap-2 rounded " onSubmit={salvarAutor}>
                <label htmlFor="nome">Nome Completo</label>
                <input required className="text-black rounded" type="text" value={nome} onChange={e => setNome(e.target.value)} id="nome"/>
                <label htmlFor="canal">Nome do Canal</label>
                <input required className="text-black rounded" type="text" value={canal} onChange={e => setCanal(e.target.value)} id="canal"/>
                <label htmlFor="url">URL do Canal</label>
                <input required className="text-black rounded" type="text" value={urlCanal} onChange={e => setUrlCanal(e.target.value)} id="url"/>
                <button className="mt-6 bg-zinc-700 p-6 text-xl rounded-md">Cadastrar</button>
            </form>
        </div>
    )
}