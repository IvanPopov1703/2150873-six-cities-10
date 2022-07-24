type PropertyInsideItemProps = {
  propertyItem: string
}

function PropertyInsideItem({propertyItem}: PropertyInsideItemProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {propertyItem}
    </li>
  );
}

export default PropertyInsideItem;
