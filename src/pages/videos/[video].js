import Header from "@/components/Header"
import Video from "@/components/Video"
import { useRouter } from "next/router"

export default function DetalhamentoVideo() {
    const router = useRouter()

    return(
        <div>
            <Header/>
            <Video id={router.query.video}/>
        </div>
    )
}