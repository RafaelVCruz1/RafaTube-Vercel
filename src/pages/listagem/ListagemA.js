import { autores } from "../../dados/memoriaLocal"
import Header from "@/components/Header"
import CardAutor from "@/components/CardA"
import ListaCard from "@/components/Lista"
import { useState, useEffect } from "react"

export default function ListagemAutor() {
  const [listaAutores, setListaAutores] = useState([])

  useEffect(() => {
    const temRegistro = JSON.parse(localStorage.getItem("listadeautores")) != null
    let lista = temRegistro ? JSON.parse(localStorage.getItem("listadeautores")) : []

    setListaAutores(lista.concat(autores))
  }, [])

  return (
    <main>
      <Header/>
      <ListaCard titulo="Autores Cadastrados">
        {listaAutores.map(autor => <CardAutor key={autor.id} nome={autor.nome} canal={autor.canal} urlCanal={autor.urlCanal}/>)}
      </ListaCard>
    </main>
  )
}