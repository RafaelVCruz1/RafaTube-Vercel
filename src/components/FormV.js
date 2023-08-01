import { useState } from "react"

export default function FormVideo() {

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [genero, setGenero] = useState("")
    const [autor, setAutor] = useState("")
    const [url, setURL] = useState("")

    const salvarVideo = (evento) => {
        evento.preventDefault();

        let idVideo;
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
        var match = url.match(regExp)
        if (match && match[2].length == 11) {
            idVideo = match[2]
        }

        const novoVideo = {
            id: idVideo,
            titulo: titulo,
            descricao: descricao,
            genero: genero,
            autor: autor,
            url: url
        }
        const temRegistro = JSON.parse(localStorage.getItem("listadevideos")) != null
        const videos = temRegistro ? JSON.parse(localStorage.getItem("listadevideos")) : []
        videos.unshift(novoVideo)
        localStorage.setItem("listadevideos", JSON.stringify(videos))
        setTitulo("")
        setDescricao("")
        setGenero("")
        setAutor("")
        setURL("")
    }
    
    return(
        <div className="bg-zinc-900 grid grid-cols-3 gap-4 content-start rounded p-6">
            <h2 className="text-xl p-6 pl-0 pt-0">Cadastro de Vídeos</h2>
            <form className="mt-12 bg-zinc-800 p-6 grid mt-24 grid-cols-1 gap-2 rounded" onSubmit={salvarVideo}>
                <label htmlFor="titulo">Título</label>
                <input required className="text-black rounded" type="text" value={titulo} onChange={e => setTitulo(e.target.value)} id="titulo"/>
                <label htmlFor="descricao">Descrição</label>
                <input required className="text-black rounded" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} id="descricao"/>
                <label htmlFor="genero">Genero:</label>
                <select name="genero" className="text-black rounded" type="text" value={genero} onChange={e => setGenero(e.target.value)} id="genero" required>
                    <option value=""></option>  
                    <option value="Esportes">Esportes</option>
                    <option value="Programação">Programação</option>
                    <option value="Musica">Musica</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Jogos">Jogos</option>
                </select>
                <label htmlFor="autor">Autor</label>
                <input required className="text-black rounded" type="text" value={autor} onChange={e => setAutor(e.target.value)} id="autor"/>
                <label htmlFor="url">URL</label>
                <input required className="text-black rounded" type="text" value={url} onChange={e => setURL(e.target.value)} id="url"/>
                <button className="mt-6 bg-zinc-700 p-6 text-xl rounded-md text-white font-bold">Cadastrar</button>
            </form>
        </div>
    )
}