import {useAppDispatch, useAppSelector} from '../../hooks';
import cn from 'classnames';
import {getActiveCity} from '../../store/app-process/selectors';
import {changeActiveCity} from '../../store/app-process/app-process';

type TabsItemProps = {
  itemName: string
}

function TabsItem({itemName}: TabsItemProps): JSX.Element {

  const activeCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  const activeClassStyle = cn('locations__item-link tabs__item', {
    'tabs__item--active': itemName === activeCity
  });

  return (
    <li className="locations__item" onClick={() => dispatch(changeActiveCity(itemName))}>
      <a className={activeClassStyle} href="#">
        <span>{itemName}</span>
      </a>
    </li>
  );
}

export default TabsItem;
