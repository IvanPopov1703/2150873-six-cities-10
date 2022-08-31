import MainScreen from '../../pages/main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import {AppRoute} from '../../const';
import PrivateRoute from '../../hocs/private-route/private-route';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/page-not-found/not-found-screen';
import {useAppSelector} from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {

  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainScreen />
        }
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen />} />
        <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
