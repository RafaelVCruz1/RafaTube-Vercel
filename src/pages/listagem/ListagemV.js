import { videos } from "../../dados/memoriaLocal"
import Capa from "@/components/Header"
import CardVideo from "@/components/CardV"
import ListaCard from "@/components/Lista"
import { useState, useEffect } from "react"

export default function ListagemVideo() {
  const [listaVideos, setListaVideos] = useState([])

  useEffect(() => {
    const temRegistro = JSON.parse(localStorage.getItem("listadevideos")) != null
    let lista = temRegistro ? JSON.parse(localStorage.getItem("listadevideos")) : []

    setListaVideos(lista.concat(videos))
  }, [])

  return (
    <main>
      <Capa/>
      <ListaCard titulo="Vídeos Cadastrados">
        {listaVideos.map(video => <CardVideo key={video.id} id={video.id} titulo={video.titulo} descricao={video.descricao} autor={video.autor} genero={video.genero} url={video.url}/>)}
      </ListaCard>
    </main>
  )
}