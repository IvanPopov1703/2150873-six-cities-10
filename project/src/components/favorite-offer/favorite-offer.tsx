import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {OfferType} from '../../types/offers';

type FavoriteOfferProps = {
  favoriteOffer: OfferType
}

function FavoriteOffer({favoriteOffer}: FavoriteOfferProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {
        favoriteOffer.isPremium
          ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : null
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={favoriteOffer.previewImage} width="150" height="110" alt="Место для фото"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{favoriteOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: `${favoriteOffer.id}`})}>{favoriteOffer.title}</Link>
        </h2>
        <p className="place-card__type">{favoriteOffer.type}</p>
      </div>
    </article>
  );
}

export default FavoriteOffer;
