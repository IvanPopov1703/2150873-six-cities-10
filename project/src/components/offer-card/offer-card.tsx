import {OfferCardObject} from '../../types/offer-card-object';

function OfferCard(props: OfferCardObject): JSX.Element {

  return (
    <article className="cities__card place-card">
      {
        props.isPremium
          ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : ''
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={props.imgPath} width="260" height="200" alt='Карточка с предложением'/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{props.housingCost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={props.isSelected
              ? 'place-card__bookmark-button button place-card__bookmark-button--active'
              : 'place-card__bookmark-button button'} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{props.title}</a>
        </h2>
        <p className="place-card__type">{props.housingType}</p>
      </div>
    </article>
  );
}

export default OfferCard;
