interface IPhotoProps{
src?: string;
alt?: string;
}

function Photo({src = "/images/plug.webp"  ,alt = "заглушка" }:IPhotoProps){
return (<img src={src} alt={alt} loading="lazy" width={200} height={200}/>)
}

export default Photo