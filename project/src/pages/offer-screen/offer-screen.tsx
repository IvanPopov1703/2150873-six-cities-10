import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import PropertyImage from '../../components/property-image/property-image';
import CommentSubmissionForm from '../../components/comment-submission-form/comment-submission-form';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchActiveOfferAction, fetchNeighbourhoodAction, fetchReviewsAction} from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {AuthorizationStatus, NUMBER_OF_IMAGES, NUMBER_OF_NEIGHBOURHOOD, NUMBER_OF_REVIEWS} from '../../const';
import {ReviewsType} from '../../types/reviews';
import Review from '../../components/review/review';
import PropertyInsideItem from '../../components/property-inside-item/property-inside-item';
import BtnFavorite from '../../components/btn-favorite/btn-favorite';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getActiveOffer, getIsOfferLoading, getNeighbourhood, getReviews} from '../../store/data-process/selectors';

const prepareReviews = (reviews: ReviewsType) => {
  if (reviews.length <= 1) {
    return reviews;
  }
  return [...reviews]
    .sort((reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date))
    .slice(0, NUMBER_OF_REVIEWS);
};

function OfferScreen(): JSX.Element {

  const params = useParams();
  const currentOfferId = Number(params.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchActiveOfferAction(currentOfferId));
    dispatch(fetchNeighbourhoodAction(currentOfferId));
    dispatch(fetchReviewsAction(currentOfferId));
  }, [currentOfferId, dispatch]);

  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const currentOffer = useAppSelector(getActiveOffer);
  const reviews = useAppSelector(getReviews);
  const neighbourhood = useAppSelector(getNeighbourhood).slice(0, NUMBER_OF_NEIGHBOURHOOD);

  if (isOfferLoading || null === currentOffer) {
    return (<LoadingScreen />);
  }

  const {
    id,
    images,
    title,
    city,
    isPremium,
    rating,
    price,
    isFavorite,
    type,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
  } = currentOffer;

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
                {images.slice(0, NUMBER_OF_IMAGES).map((item) => <PropertyImage key={item} imagePath={item} />)}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  isPremium ?
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                    : null
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <BtnFavorite isFavorite={isFavorite} offerId={id} isBig />
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${rating * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms}
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((item) => <PropertyInsideItem key={item} propertyItem={item} />)}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatarUrl}
                        width="74" height="74" alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    {
                      host.isPro ?
                        <span className="property__user-status">
                          Pro
                        </span>
                        : null
                    }
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;
                    <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ul className="reviews__list">
                    {prepareReviews(reviews).map((review) => <Review review={review} key={review.id}/>)}
                  </ul>
                  {isAuth && <CommentSubmissionForm offerId={currentOfferId} />}
                </section>
              </div>
            </div>
            <Map city={city} pointsCity={[currentOffer, ...neighbourhood]} selectedOfferCardId={currentOfferId} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OfferList offers={neighbourhood} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default OfferScreen;
