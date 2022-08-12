import {Icon, Marker} from 'leaflet';
import {CityType, OffersType} from '../../types/offers';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  city: CityType,
  pointsCity: OffersType,
  selectedOfferCardId: number | null
}

function Map({city, pointsCity, selectedOfferCardId}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      pointsCity.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedOfferCardId !== undefined && point.id === selectedOfferCardId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, pointsCity, selectedOfferCardId]);

  return (<section style={{height: '100%'}} className='cities__map' ref={mapRef} />);
}

export default Map;
