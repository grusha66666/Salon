import css from "./../styles/Photo.module.css"

interface IPhotoProps{
src?: string;
alt?: string;
}

function Photo3({src = "/images/plug.webp"  ,alt = "заглушка" }:IPhotoProps){
return (<img className={css.photos3} src={src} alt={alt} loading="lazy" width={250} height={250}/>)
}

export default Photo3