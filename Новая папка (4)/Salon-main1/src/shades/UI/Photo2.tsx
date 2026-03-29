import css from "./../styles/Photo.module.css"

interface IPhotoProps{
src?: string;
alt?: string;
}

function Photo2({src = "/images/plug.webp"  ,alt = "заглушка" }:IPhotoProps){
return (<img className={css.photos} src={src} alt={alt} loading="lazy" width={250} height={250}/>)
}

export default Photo2