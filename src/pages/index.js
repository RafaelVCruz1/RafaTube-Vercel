import { autores, videos } from "../dados/memoriaLocal"
import Header from "@/components/Header"
import CardAutor from "@/components/CardA"
import CardVideo from "@/components/CardV"
import Lista from "@/components/Lista"
import { useEffect, useState } from "react"

export default function Home() {
  const [listaAutores, setListaAutores] = useState([])
  const [listaVideos, setListaVideos] = useState([])

  useEffect(() => {
    const temRegistroAutor = JSON.parse(localStorage.getItem("listadeautores")) != null
    let autoresExistentes = temRegistroAutor ? JSON.parse(localStorage.getItem("listadeautores")) : []
    setListaAutores(autoresExistentes.concat(autores))

    const temRegistroVideo = JSON.parse(localStorage.getItem("listadevideos")) != null
    let videosExistentes = temRegistroVideo ? JSON.parse(localStorage.getItem("listadevideos")) : []
    setListaVideos(videosExistentes.concat(videos))
  }, [])        

  return (
    <main className="bg-zinc-950">
      <Header/>
      <Lista titulo="Novos Autores">
        {listaAutores.map(autor => <CardAutor key={autor.id} id={autor.id} nome={autor.nome} canal={autor.canal} urlCanal={autor.urlCanal}/>)}
      </Lista>
      <Lista titulo="Novos Vídeos">
        {listaVideos.map(video => <CardVideo key={video.id} id={video.id} titulo={video.titulo} descricao={video.descricao} autor={video.autor} genero={video.genero} url={video.url}/>)}
      </Lista>
    </main>
  )
}
