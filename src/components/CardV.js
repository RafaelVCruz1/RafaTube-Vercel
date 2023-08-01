import Link from "next/link";
import Video from "./Video"

export default function CardV(props) {
    return(
        <div className="text-justify bg-zinc-900 p-6 rounded-md border-b-4 border-zinc-400">
            <h2 className="text-lg m-2 ml-0 font-semibold"><Link href={"/videos/" + props.id}>{props.titulo}</Link></h2>
            <h2 className="text-sm">{props.descricao}</h2>
            <Video id={props.id}/>
            <h2 className="text-right"><span className="font-semibold">{props.autor}</span> — {props.genero}</h2>
        </div>
    )
}