import {AppRoute} from '../../const';
import {generatePath, Link} from 'react-router-dom';
import {OfferType} from '../../types/offers';
import BtnFavorite from '../btn-favorite/btn-favorite';

type OfferCardProps = {
  offer: OfferType,
  onOfferCardMouseOver?: (id: number) => void,
  onOfferCardLeave?: () => void,
}

function OfferCard({offer, onOfferCardMouseOver, onOfferCardLeave}: OfferCardProps): JSX.Element {
  const {id, isFavorite, isPremium, previewImage, price, rating, title, type} = offer;

  return (
    <article className="cities__card place-card"
      onMouseOver={() => onOfferCardMouseOver?.(id)}
      onMouseLeave={() => onOfferCardLeave?.()}
    >
      {
        isPremium
          ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, {id: `${id}`})}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt='Карточка с предложением'/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BtnFavorite isFavorite={isFavorite} offerId={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: `${id}`})}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
