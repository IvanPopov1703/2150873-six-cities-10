import {CITIES} from '../../const';
import TabsItem from '../tabs-item/tabs-item';

function TabsList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((item) => <TabsItem key={item} itemName={item} />)}
        </ul>
      </section>
    </div>
  );
}

export default TabsList;
