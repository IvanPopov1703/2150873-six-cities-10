import OfferCard from '../offer-card/offer-card';
import {OffersType} from '../../types/offers';
import {Fragment} from 'react';

type OfferListProps = {
  offers: OffersType,
  onOfferCardMouseOver?: (id: number) => void,
  onOfferCardLeave?: () => void
}

function OfferList({offers, onOfferCardMouseOver, onOfferCardLeave}: OfferListProps): JSX.Element {
  return (
    <Fragment>
      {
        offers.map((item) => (
          <OfferCard
            key={item.id}
            id={item.id}
            previewImage={item.previewImage}
            isFavorite={item.isFavorite}
            isPremium={item.isPremium}
            title={item.title}
            type={item.type}
            price={item.price}
            rating={item.rating}
            onOfferCardMouseOver={onOfferCardMouseOver}
            onOfferCardLeave={onOfferCardLeave}
          />
        ))
      }
    </Fragment>
  );
}

export default OfferList;
