export default function Video(props) {

    const link = "https://www.youtube.com/embed/" + props.id

    return(
        <div className="flex justify-center p-3">
            <iframe
            className="aspect-video w-1/2"
            src={link}
            allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
            
    )
}