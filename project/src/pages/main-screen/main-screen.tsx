import Header from '../../components/header/Header';
import OfferList from '../../components/offer-list/offer-list';
import {useState} from 'react';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import TabsList from '../../components/tabs-list/tabs-list';
import MainNotFoundOffers from '../../components/main-not-found-offers/main-not-found-offers';
import SortOptionsForm from '../../components/sort-options-form/sort-options-form';
import SortByOption from '../../utils/sort-by-option';
import LoadingScreen from '../../components/loading-screen/loading-screen';

function MainScreen(): JSX.Element {

  const [activeOfferCardId, setActiveOfferCardId] = useState<number | null>(null);

  const handleOfferCardMouseOver = (id: number) => setActiveOfferCardId(id);
  const handleOfferCardLeave = () => setActiveOfferCardId(null);

  const activeCity = useAppSelector((state) => state.activeCity);
  const activeSortType = useAppSelector((state) => state.activeSortOption);
  const allOffers = useAppSelector((state) => state.offers);
  const filterOffers = allOffers.filter((item) => item.city.name === activeCity);
  const offers = SortByOption([...filterOffers], activeSortType);
  const numberOfOffersFound = filterOffers.length;
  const offerLoadingStatus = useAppSelector((state) => state.isOfferLoading);

  if (offerLoadingStatus) {
    return (<LoadingScreen />);
  }

  return (
    <div>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"/>
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

      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <TabsList />
          <div className="cities">
            {
              offers.length === 0
                ? <MainNotFoundOffers cityName={activeCity} />
                :
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{numberOfOffersFound} places to stay in {activeCity}</b>
                    <SortOptionsForm />
                    <div className="cities__places-list places__list tabs__content">
                      <OfferList offers={offers}
                        onOfferCardMouseOver={handleOfferCardMouseOver}
                        onOfferCardLeave={handleOfferCardLeave}
                      />
                    </div>
                  </section>
                  <div className="cities__right-section">
                    <Map city={offers[0].city} pointsCity={offers} selectedOfferCardId={activeOfferCardId} />
                  </div>
                </div>
            }
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainScreen;
