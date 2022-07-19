import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <Fragment>
      <h1>
        <strong>404 Page Not Found</strong>
      </h1>
      <Link to={AppRoute.Main}>Go to main page</Link>
    </Fragment>
  );
}

export default NotFoundScreen;
