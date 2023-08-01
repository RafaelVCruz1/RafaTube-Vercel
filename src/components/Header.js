import Link from "next/link";

export default function Header() {
    return(
        <header className="border-b-[1px] fixed flex w-full m-0 bg-zinc-950 justify-between items-baseline p-2 font-semibold">
            <h2 className="text-xl flex-none p-6"> RafaTube</h2>
            <nav className="text-lg flex-1 flex items-center justify-around flex-nowrap p-6">
                <Link href="/">Início</Link>
                <Link href="/cadastro/CadastroV">Cadastro de Vídeos</Link>
                <Link href="/listagem/ListagemV">Listagem de Vídeos</Link>
                <Link href="/cadastro/CadastroA">Cadastro de Autores</Link>
                <Link href="/listagem/ListagemA">Listagem de Autores</Link>
            </nav>
        </header>
    )
}