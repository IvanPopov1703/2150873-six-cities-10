import {Icon, Marker} from 'leaflet';
import {CityType, OffersType} from '../../types/offers';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import {AppRoute} from '../../const';
import cn from 'classnames';
import {useLocation} from 'react-router-dom';
import {getRoute} from '../../utils/get-route';

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
  const {pathname} = useLocation();
  const route = getRoute(pathname);

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

  const mapClassName = cn('map', {
    'cities__map': pathname === AppRoute.Main,
    'property__map': route === getRoute(AppRoute.Offer),
  });

  return (
    <section
      style={{maxWidth: '1144px', margin: '0 auto'}}
      className={mapClassName}
      ref={mapRef}
    />
  );
}

export default Map;
