import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import cn from 'classnames';
import {AppRoute, AuthorizationStatus} from '../../const';
import {changeFavoriteStatusAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type BtnFavoriteProps = {
  isFavorite: boolean;
  offerId: number,
  isBig?: boolean,
}

function BtnFavorite({isFavorite, offerId, isBig}: BtnFavoriteProps): JSX.Element {

  const authStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const btnClassName = cn('button', {
    'place-card__bookmark-button': !isBig,
    'place-card__bookmark-button--active': isFavorite && !isBig,
    'property__bookmark-button': isBig,
    'property__bookmark-button--active': isFavorite && isBig,
  });

  const svgClassName = cn({
    'place-card__bookmark-icon': !isBig,
    'property__bookmark-icon': isBig,
  });

  const onFavoritesBtnClick = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(changeFavoriteStatusAction({
      id: offerId,
      status: Number(!isFavorite)
    }));
  };

  return (
    <button
      className={btnClassName}
      type="button"
      onClick={onFavoritesBtnClick}
    >
      <svg
        className={svgClassName}
        width={isBig ? '31' : '18'}
        height={isBig ? '33' : '19'}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default BtnFavorite;
