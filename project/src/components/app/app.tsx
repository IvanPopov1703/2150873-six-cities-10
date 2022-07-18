import MainScreen from '../../pages/main-screen/main-screen';
import {FoundNumOfAccommodationOptions} from '../../types/offer-card-object';

function App({foundNumOfAccommodationOptions}: FoundNumOfAccommodationOptions): JSX.Element {
  return (<MainScreen foundNumOfAccommodationOptions={foundNumOfAccommodationOptions}/>);
}

export default App;
