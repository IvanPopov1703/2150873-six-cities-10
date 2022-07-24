import MainScreen from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../../hocs/private-route/private-route';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/page-not-found/not-found-screen';
import {OffersType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';

type AppProps = {
  offers: OffersType,
  reviews: ReviewsType,
  numberOfOffersFound: number
}

function App({offers, reviews, numberOfOffersFound}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainScreen offers={offers} numberOfOffersFound={numberOfOffersFound}/>
        }
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen offers={offers} reviews={reviews} />} />
        <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
