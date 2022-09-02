import Header from '../../components/header/header';
import {Fragment} from 'react';
import FavoriteOffer from '../../components/favorite-offer/favorite-offer';
import {useAppSelector} from '../../hooks';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import cn from 'classnames';
import {OffersType} from '../../types/offers';
import {getFavorites} from '../../store/data-process/selectors';

type OffersIndexType = {
  [key: string]: OffersType,
}

const indexOffersByCities = (offers: OffersType): OffersIndexType => (
  offers.reduce((acc: OffersIndexType, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {})
);

function FavoritesScreen(): JSX.Element {

  const favorites = useAppSelector(getFavorites);
  const isEmpty = favorites.length === 0;
  const indexedOffers = indexOffersByCities(favorites);

  const mainClassName = cn('page__main page__main--favorites', {
    'page__main--favorites-empty': isEmpty,
  });

  const titleClassName = cn({
    'visually-hidden': isEmpty,
    'favorites__title': !isEmpty,
  });

  return (
    <Fragment>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
            />
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            />
          </symbol>
        </svg>
      </div>

      <div className="page">
        <Header/>
        <main className={mainClassName}>
          <div className="page__favorites-container container">
            <section className={`favorites ${isEmpty ? 'favorites--empty' : ''}`}>
              <h1 className={titleClassName}>Saved listing</h1>
              {isEmpty
                ? <FavoritesEmpty />
                :
                <ul className="favorites__list">
                  {Object.entries(indexedOffers)
                    .map(([city, localOffers]) => (
                      <FavoriteOffer cityName={city} localOffers={localOffers} key={city} />
                    ))}
                </ul>}
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}

export default FavoritesScreen;
