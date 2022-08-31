import Header from '../../components/header/Header';
import {useParams} from 'react-router-dom';
import {OffersType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';
import PropertyImage from '../../components/property-image/property-image';
import PropertyInsideItem from '../../components/property-inside-item/property-inside-item';
import ReviewsItem from '../../components/reviews-item/reviews-item';
import CommentSubmissionForm from '../../components/comment-submission-form/comment-submission-form';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';

type OfferScreenProps = {
  offers: OffersType,
  reviews: ReviewsType
}

function OfferScreen({offers, reviews}: OfferScreenProps): JSX.Element {

  const params = useParams();
  const currentOfferId = Number(params.id);
  const currentOffer = offers.filter((item: { id: number; }) => item.id === currentOfferId)[0];
  const otherOffers = offers.filter((item: { id: number; }) => item.id !== currentOfferId);

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

      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {currentOffer.images.map((item) => <PropertyImage key={item} imagePath={item} />)}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  currentOffer.isPremium ?
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                    : null
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${currentOffer.rating * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms}
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {currentOffer.goods.map((item) => <PropertyInsideItem key={item} propertyItem={item} />)}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl}
                        width="74" height="74" alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                    {
                      currentOffer.host.isPro ?
                        <span className="property__user-status">
                          Pro
                        </span>
                        : null
                    }
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;
                    <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ul className="reviews__list">
                    {reviews.map((item) => <ReviewsItem key={item.id} review={item} />)}
                  </ul>
                  <CommentSubmissionForm />
                </section>
              </div>
            </div>
            <Map city={currentOffer.city} pointsCity={offers} selectedOfferCardId={currentOfferId} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OfferList offers={otherOffers} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default OfferScreen;
