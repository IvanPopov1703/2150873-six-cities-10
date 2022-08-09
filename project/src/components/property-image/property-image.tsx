type PropertyImageProps = {
  imagePath: string
}

function PropertyImage({imagePath}: PropertyImageProps) : JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={imagePath} alt="Фото комнаты"/>
    </div>
  ) ;
}

export default PropertyImage;
