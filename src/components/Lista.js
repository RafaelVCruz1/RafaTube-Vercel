export default function Lista(props) {
    return(
        <div className="bg-zinc-950 rounded p-6">
            <h2 className="text-xl mt-12 p-6 pl-0 pt-0">{props.titulo}</h2>
            <ul className="grid grid-cols-3 gap-6">
                {props.children}
            </ul>
        </div>
    )
}