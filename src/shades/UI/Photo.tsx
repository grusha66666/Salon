import css from "./../styles/Photo.module.css"

interface IPhotoProps{
src?: string;
alt?: string;
}

function Photo({src = "/images/plug.webp"  ,alt = "заглушка" }:IPhotoProps){
return (<img className={css.photo} src={src} alt={alt} loading="lazy" width={200} height={200}/>)
}

export default Photo