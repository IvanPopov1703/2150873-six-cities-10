import {useAppSelector} from '../../hooks';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

function UserInfo(): JSX.Element {

  const {user, favorites} = useAppSelector((state) => state);

  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Favorites}
      >
        <div
          style={{
            backgroundImage: `url(${user && user.avatarUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '50%',
          }}
          className="header__avatar-wrapper user__avatar-wrapper"
        />
        <span className="header__user-name user__name">{user && user.email}</span>
        <span className="header__favorite-count">{favorites.length}</span>
      </Link>
    </li>
  );
}

export default UserInfo;
