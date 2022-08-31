import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {OffersType} from '../../types/offers';
import {useAppDispatch} from '../../hooks';
import {changeActiveCity} from '../../store/action';
import OfferCard from '../offer-card/offer-card';

type FavoriteOfferProps = {
  cityName: string,
  localOffers: OffersType,
}

function FavoriteOffer({cityName, localOffers}: FavoriteOfferProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.Main}
            onClick={() => dispatch(changeActiveCity(cityName))}
          >
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {localOffers.map((offer) => <OfferCard offer={offer} key={offer.id}/>)}
      </div>
    </li>
  );
}

export default FavoriteOffer;
